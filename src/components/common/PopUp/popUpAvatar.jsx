
import React from 'react';

import styles from './popupAvatar.module.css'

const PopUpAvatar = ({ avatar, closePopup }) => {
    return <div className={styles.popup}>

        <div onClick={closePopup} className={styles.closePopup} role='button'></div>
        <img className={styles.avatr} src={avatar} alt="avatr"/>
  
</div>
}

export default PopUpAvatar;