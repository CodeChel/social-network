
import React from 'react';
import avatar from '../../../../assets/img/ava.jpg'
import styles from './ProfilePhoto.module.css'



const ProfileAvatar = ({isMyPage, savePhoto, setPopupAvatar, photoLarge}) => {

    const updatePhoto = e => {
        if (e.target.files[0]) {
            savePhoto(e.target.files[0])
        }
    }

    return <div className={isMyPage ? styles.avatarContainer + ' ' + styles.avatarUpdate : styles.avatarContainer}>
            <img onClick={() => { photoLarge && setPopupAvatar(true) }} className={styles.avatar + ' ' + (photoLarge && styles.avatarCustom)}
                src={photoLarge ? photoLarge : avatar} alt="" />
            {isMyPage
                && <div className={styles.changePhoto}>
                    <label htmlFor="upload-photo" className={styles.changePhotoLabel}>Update photo</label>
                    <input className={styles.changePhotoInput} id="upload-photo" type='file' onChange={updatePhoto} />
                </div>
            }
    </div>
}
export default ProfileAvatar;