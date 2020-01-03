import React from 'react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import styles from './profileDescription.module.css'
import AboutProfile from './AboutProfile'
const ProfileDescrition = ({ setEditProfile, isEditMode, profile, isMyPage, ...props }) => {


    
    return <div >
        <h2 className={styles.name}>{profile.fullName}</h2>
        <ProfileStatusWithHooks isMyPage={isMyPage} updateStatus={props.updateStatus} status={props.status} />
        <AboutProfile setEditProfile={setEditProfile} isEditMode={isEditMode} profile={profile} isMyPage={isMyPage} saveProfileData={props.saveProfileData}/>
    </div>
}



export default ProfileDescrition;