import React from 'react';
import styles  from './MessageItem.module.css'




const MessageItem = (props) =>{
    return (props.right 
        ? <div className={styles.messageContainer}>
            <div className={styles.time + ' ' + styles.timeRight}>{props.time}</div>
            <div className={styles.message+ ' ' + styles.messageRight}>{props.message}</div>
         </div>
        : <div className={styles.messageContainer}> 
            <div className={styles.message}>{props.message}</div>
            <div className={styles.time + ' ' + styles.timeLeft}>{props.time}</div>
         </div> 
    )

}

   
export default MessageItem;