import React, { useState, useRef, useEffect } from 'react'
import styles from './Messages.module.css'
import DialogWithUser from './DialogsList/DialogWithUser'
import DialogSession from './DialogSession'
import ScrollbarHOC from '../../common/HOCScrollBar/HOCScrollbarCusctom'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import EmptyDialogMessages from './EmpyDialogSession'





const Messages = ({ dialogItemsData, setSearch, dialogsFromSearch, ...props }) => {

    const [searchWord, setSearchWord] = useState('');
    const [isSearchMode, setSearchMode] = useState(false);
    const breakpoint = 790;

    useEffect(() => {
        const outSearhCheck = (e) => {
            if (e.target !== searchInput.current && e.target !== dialogRef.current) {
                outSearch()
            }

        }
        if (isSearchMode) {
            document.addEventListener('click', outSearhCheck)
        }
        else {
            document.removeEventListener('click', outSearhCheck)
        }
        return () => {
            document.removeEventListener('click', outSearhCheck)
        }
    }, [isSearchMode])

    const searchInput = useRef();
    const dialogRef = useRef();

    const handleSearch = (e) => {
        const word = e.currentTarget.value;
        setSearchWord(word);
        if (word && word.trim() !== '') {
            setSearch(word)
            setSearchMode(true)
        }
    }
    const outSearch = () => {
        setSearchMode(false)
        setSearchWord('')
    }

    const currentDialogId = +props.match.params.userId ? +props.match.params.userId : 0;
    const currentDialog = currentDialogId && dialogItemsData[dialogItemsData.findIndex((i) => { return i.userId === currentDialogId })];

    const dialogItems = dialogItemsData.map((item, index) => <DialogWithUser avatar={item.avatar} currentDialogId={currentDialogId}
        date={item.messages[item.messages.length - 1].date} isYoursMessage={item.messages[item.messages.length - 1].right}
        lastMessage={item.messages[item.messages.length - 1].message} key={index + 1} name={item.name} id={item.userId} />)

    const dialogItemsSearch = isSearchMode && dialogsFromSearch.map((item, index) => <DialogWithUser dialogRef={dialogRef} isSearchMode={isSearchMode}
        avatar={item.avatar} outSearch={outSearch} lastMessage={item.messages[item.messages.length - 1].message}
        date={item.messages[item.messages.length - 1].date} isYoursMessage={item.messages[item.messages.length - 1].right}
        key={index + 1} name={item.name} id={item.userId} currentDialogId={currentDialogId} />)



    return ResponsiveLayout(breakpoint, renderDesktop, renderMobile, { currentDialogId, currentDialog, dialogItemsSearch, dialogItems, handleSearch, isSearchMode, searchInput, searchWord, ...props })
}


const ResponsiveLayout = (breakpoint, renderDesktop, renderMobile, props ) => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])
    return (width > breakpoint ? renderDesktop(props) : renderMobile(props))
}

const renderDesktop = (props) => {
    return <MessagesDesktop {...props} />
}
const renderMobile = (props) => {
    return <MessagesMobile {...props} />
}

const MessagesMobile = ({ currentDialogId, isSearchMode, currentDialog, searchInput, searchWord, dialogItemsSearch, dialogItems, handleSearch, ...props }) => {

    return <div className={styles.messagesMobile} >

        {!!currentDialogId &&
            <Switch>
                <Route exact path={`/messages/`} render={() => <EmptyDialogMessages />} />
                <Route path={`/:userId`} render={() => <DialogSession historyChatHeight='65%' valueMessage={props.valueMessage} isSearchMode={isSearchMode} userId={currentDialogId}
                    sendMessage={props.sendMessage} currentDialog={currentDialog} isFetching={props.isFetching} getUserForMessages={props.getUserForMessages}
                    userForMessage={props.userForMessage} setNewDialog={props.setNewDialog} setUserForMessages={props.setUserForMessages} />} />

            </Switch>

        }

        {!currentDialogId && <div className={styles.dialogItems}>
            <div className={styles.dialogSearch}>
                <input ref={searchInput} placeholder='Search' className={styles.searchInput} value={searchWord} onChange={e => handleSearch(e)} type="text" name="" id="" />
            </div>
            <div className={styles.dialogsList}>
                <ScrollbarHOC children={isSearchMode ? dialogItemsSearch : dialogItems} removeTrackYWhenNotUsed={true} style={{ width: "100%", height: "88vh" }} />
            </div>
        </div>}

    </div>

}
const MessagesDesktop = ({ currentDialogId, isSearchMode, currentDialog, searchInput, searchWord, dialogItemsSearch, dialogItems, handleSearch, ...props }) => {
    return <div className={styles.messages} >

        <Switch>
            <Route exact path={`/messages/`} render={() => <EmptyDialogMessages />} />
            <Route path={`/:userId`} render={() => <DialogSession historyChatHeight='75%' valueMessage={props.valueMessage} isSearchMode={isSearchMode} userId={currentDialogId}
                sendMessage={props.sendMessage} currentDialog={currentDialog} isFetching={props.isFetching} getUserForMessages={props.getUserForMessages}
                userForMessage={props.userForMessage} setNewDialog={props.setNewDialog} setUserForMessages={props.setUserForMessages} />} />

        </Switch>






        <div className={styles.dialogItems}>
            <div className={styles.dialogSearch}>
                <input ref={searchInput} placeholder='Search' className={styles.searchInput} value={searchWord} onChange={e => handleSearch(e)} type="text" name="" id="" />
            </div>
            <div className={styles.dialogsList}>
                <ScrollbarHOC children={isSearchMode ? dialogItemsSearch : dialogItems} removeTrackYWhenNotUsed={true} style={{ width: "100%", height: "85vh" }} />
            </div>
        </div>

    </div>

}

export default Messages;