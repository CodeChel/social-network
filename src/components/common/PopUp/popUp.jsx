
import React from 'react'
import styles from './popUp.module.css'




const PopUp = ({ Component, ...props }) => {

    const clickHandler = (e) => {
        if (e.target === e.currentTarget) props.closePopup()
    }
    return <div onClick={clickHandler} className={styles.popup} >
        <Component {...props} />
    </div>
}
export default PopUp      