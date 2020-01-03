import React from 'react'
import styles from './Messages.module.css'


const EmptyDialogMessages = () => {
    return <div className={styles.emptyMessages}>
        <div className={styles.iconMessage}></div>
        <div className={styles.selectDialog}>
            Please select a dialog
            </div>
    </div>
}
export default EmptyDialogMessages;