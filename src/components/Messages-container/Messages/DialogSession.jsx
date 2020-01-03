import React, { useEffect, useRef} from 'react'

import MessageItem from './MessageItem/MessageItem'
import styles from './Messages.module.css'

import ScrollbarHOC from '../../common/HOCScrollBar/HOCScrollbarCusctom';
import { NavLink } from 'react-router-dom';
import avatar from '../../../assets/img/ava.jpg'




import AddMessageFormWithConnect from './AddMessageFormWithConnect'
import Preloader from '../../common/Preloader/Preloader';
import EmptyDialogMessages from './EmpyDialogSession';


const DialogSession = ({currentDialog, ...props}) => {
    return currentDialog
    ? <DialogSessionWithHistory currentDialog={currentDialog}  {...props}/>
    : <DialogSessionWithOutHistory {...props}/>
    
    
}



const DialogSessionWithHistory = ({currentDialog, ...props}) =>{
    
    const messageItems = currentDialog.messages.map((item, index) => <MessageItem time={item.timeFormat} key={index} right={item.right} message={item.message} id={item.id} />)

    const scrollBar = useRef()
    
    useEffect(() => {   
        !props.isSearchMode && document.querySelector(`textarea[name=message${props.userId}]`).focus()
    })

    useEffect(() => {
        scrollBar.current.scrollToBottom()
    }, [messageItems])

    return <div className={styles.dialog}>
        <div className={styles.dialogHead}>
            <div className={styles.avatarContainer}>
                <NavLink to={`/profile/${props.userId}`}>
                    <img className={styles.avatar} src={currentDialog.avatar} alt="avatar" />
                </NavLink>
            </div>
            <span className={styles.name}>
                <NavLink to={`/profile/${props.userId}`}>
                    {currentDialog.name}
                </NavLink>
            </span>
            <NavLink className={styles.arrowBack} to={`/messages/`}/>          
        </div>
        <ScrollbarHOC children={<div className={styles.messagesFill}>{messageItems}</div>}  ref={scrollBar} removeTrackYWhenNotUsed={true} style={{ width: "100%", height: props.historyChatHeight}} />

        <div className={styles.formContainer}>
            <AddMessageFormWithConnect userId={props.userId} name={currentDialog.name} onSubmit={(data) => { props.sendMessage(data[`message${props.userId}`], props.userId) }} />
        </div>
    </div>
    
}
const DialogSessionWithOutHistory = ({getUserForMessages, setUserForMessages, ...props}) => {
    useEffect(()=>{
        getUserForMessages(props.userId)
        return ()=>{
            setUserForMessages(null)
        }
    },[props.userId,getUserForMessages, setUserForMessages ])
     
    return props.isFetching ?
           <Preloader />
           : !props.userForMessage 
                ? <EmptyDialogMessages />
                : <div className={styles.dialog}>
                    <div className={styles.dialogHead}>
                        <div className={styles.avatarContainer}>
                            <NavLink to={`/profile/${props.userId}`}>
                                <img className={styles.avatar} src={props.userForMessage.photo || avatar}  alt="avatar" />
                            </NavLink>
                        </div>
                        <span className={styles.name}>
                            <NavLink to={`/profile/${props.userId}`}>
                                {props.userForMessage.name}
                            </NavLink>
                        </span>
                        <NavLink className={styles.arrowBack} to={`/messages/`}/>
                    </div>
                    <div className={styles.newChat}><div className={styles.emptyChatText}>
                        Yet no messages with {props.userForMessage.name}
                    </div> </div>

                    <div className={styles.formContainer}>
                        <AddMessageFormWithConnect userId={props.userId} name={props.userForMessage.name} onSubmit={(data) => { props.setNewDialog(data[`message${props.userId}`], props.userId,
                        props.userForMessage.photo, props.userForMessage.name) }} />
                    </div>
                </div>
}


export default DialogSession;