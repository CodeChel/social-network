import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import styles from './profileInfo.module.css'
import avatar from '../../../assets/img/ava.jpg'
import PfofileDescription from './ProfileDescription/ProfileDescription'
import PopUp from '../../common/PopUp/popUp'
import PopUpMessage from '../../common/PopUp/PopUpMessage'
import PopUpAvatar from '../../common/PopUp/popUpAvatar'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar'

const ProfileInfo = ({ profile, isMyPage, isFollowed, sendMessageMode, avatarPopup, setPopupAvatar, followUnfollow, userId, ...props }) => {


    return profile

        ? <div className={styles.profileInfoContainer}>
            <div className={styles.profileInfo}>
                <div className={styles.profileAvatarContainer}>
                    <ProfileAvatar isMyPage={isMyPage} photoLarge={profile.photos.large} savePhoto={props.savePhoto} setPopupAvatar={setPopupAvatar} />

                    {isMyPage
                        ? <div role='button' className={styles.edit} onClick={() => { props.setEditProfile(true) }}>Edit Profile</div>
                        : <>
                            <div role='button' className={styles.send} onClick={() => { props.setMessageMode(true) }}>Send Message</div>
                            {isFollowed
                                ? <div className={styles.send} onClick={() => { followUnfollow(false, userId) }}> Unfollow </div>
                                : <div className={styles.send} onClick={() => { followUnfollow(true, userId) }}> Follow </div>}
                        </>
                    }
                    {sendMessageMode && <PopUp user={profile} Component={PopUpMessage} closePopup={() => { props.setMessageMode(false) }} />}
                    {avatarPopup && <PopUp avatar={profile.photos.large ? profile.photos.large : avatar} Component={PopUpAvatar} closePopup={() => { setPopupAvatar(false) }} />}
                </div>
                <PfofileDescription setEditProfile={props.setEditProfile} isEditMode={props.isEditMode} isMyPage={isMyPage} profile={profile} {...props} />

            </div>
        </div>
        : <Preloader />
}

export default ProfileInfo;