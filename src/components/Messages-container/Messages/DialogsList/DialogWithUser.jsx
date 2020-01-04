import React, { useState, useEffect } from 'react'
import styles from './DialogWithUser.module.css'
import { formatTimeToLastMessage } from '../../../../utils/timeFormat'
import {NavLink} from 'react-router-dom'

const DialogWithUser = (props) => {

    useEffect(() => {
        setLastMessageTime(formatTimeToLastMessage(new Date(props.date)))
    }, [props.date])

    const [lastMessageTime, setLastMessageTime] = useState(null);

  
    return <NavLink  to={`/messages/${props.id}`}>
        <div onClick={() => {
        props.isSearchMode && props.outSearch()
    }} ref={props.dialogRef}
        className={styles.items + ' ' + ( props.currentDialogId === props.id ? styles.selectedDialog : '')}>
        <div>
            <img className={styles.avatar} src={props.avatar} alt="avatar" />
        </div>
        <div>
            <div className={styles.name}>
                {props.name}
            </div>
            <span className={styles.message}>{props.isYoursMessage ? <span className={styles.yourMessage}>You: </span> : ''}
                {(props.lastMessage.length > 50 ? props.lastMessage.slice(0, 50) + '...' : props.lastMessage)}</span>

        </div>
        <span className={styles.timeLastMessage}>{lastMessageTime}</span>
    </div>
    </NavLink> 
}

export default DialogWithUser;