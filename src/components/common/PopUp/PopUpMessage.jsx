
import React from 'react'
import avatar from '../../../assets/img/ava.jpg'
import styles from './popUpMessage.module.css'
import { NavLink } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { createField } from '../FormControls/FormControls'
import { required, voidValue } from '../../../utils/validators/validator'

import { messageFromPopUp } from '../../../redux/messages-reducer'
import { connect } from 'react-redux'


export const PopUpMessage = ({ user, closePopup, messageFromPopUp }) => {

 
    const id = user.id || user.userId
    const name = user.name || user.fullName

    return <div className={styles.popup}>
        <div className={styles.headerPopup}>
            <div className={styles.textHeader}>New message</div>
            <div className={styles.linkMessage}>
                <NavLink to={`/messages/${id}`}>Open full chat with {name}</NavLink>
            </div>
            <div onClick={closePopup} className={styles.closePopup} role='button'></div>
        </div>
        <div className={styles.popupBody}>
            <div className={styles.userHeader}>
                <div>
                    <NavLink to={`profile/${id}`}>
                        <img  src={user.photos.small != null ? user.photos.small : avatar} alt="" className={styles.popupAvatar} />
                    </NavLink>
                </div>
                <div className={styles.usernameBlock}>
                    <NavLink to={`profile/${id}`}>
                        <p id='popUpuserName' className={styles.popupUserName}>{name}</p>
                    </NavLink>
                    <p className={styles.onlineStatus}>Offline</p>
                </div>
            </div>
        </div>
        <AddMessagePopupFormRedux onSubmit={(data) => {
            messageFromPopUp(data, user)
            closePopup()
        }} />
    </div>
}
const addMessagePopup = (props) => {
    return <form onSubmit={props.handleSubmit} className={styles.messageForm}>
        {createField(null, 'messagePopup', [required, voidValue], 'textarea', null, null)}
        <div>
            <button className={styles.buttonForm} type='submit'>Send</button>
        </div>
    </form>
}
const AddMessagePopupFormRedux = reduxForm({ form: 'message-popup' })(addMessagePopup)
 const PopUpMessageWithConnect = connect(null, { messageFromPopUp })(PopUpMessage)

 export default PopUpMessageWithConnect