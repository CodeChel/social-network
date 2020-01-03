import React from 'react';


import styles from './AboutProfile.module.css';
import ProfileEditorReduxForm from './ProfileEditorReduxForm'

const AboutProfile = ({ setEditProfile, isEditMode, profile, isMyPage, saveProfileData }) => {
    const onSubmit = (formData) => {
        saveProfileData(formData);
    }

    return <div className={styles.container}>

        {!isEditMode && <><div className={styles.header}>
            <div className={styles.aboutMe}>About me</div>
            {isMyPage && !isEditMode && <div role='button' className={styles.edit} onClick={() => { setEditProfile(true) }}></div>}
        </div>

            {profile.aboutMe &&
                <div className={styles.row}>
                    <div className={styles.nameInfo}>Description:  </div>
                    <div className={styles.rowInfo}>{profile.aboutMe}</div>
                </div>}

            <div className={styles.row}>
                <div className={styles.nameInfo}>Looking for a job:</div>
                <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            </div>

            {profile.lookingForAJobDescription &&
                <div className={styles.row}>
                    <div className={styles.nameInfo}>Skills:</div>
                    <div className={styles.rowInfo}>{profile.lookingForAJobDescription}</div>
                </div>}

            {Object.keys(profile.contacts).some(i => profile.contacts[i] !== null && profile.contacts[i] !== '') && <h2 className={styles.header}>Contacts</h2>}</>
        }
        {!isEditMode && Object.keys(profile.contacts).filter(key => profile.contacts[key] ? true : false).map((key) => {
            return <div key={key} className={styles.row}>
                <div className={styles.nameInfo}>{key + ':'}</div>
                <div className={styles.rowInfo}>
                    <a href={profile.contacts[key]} target='_blank' rel="noopener noreferrer" >{profile.contacts[key].slice(8)}</a>
                </div>
            </div>
        })}

        {isMyPage && isEditMode && <ProfileEditorReduxForm isEditMode={isEditMode} initialValues={profile} onSubmit={onSubmit} profile={profile} />}
    </div>

}


export default AboutProfile;