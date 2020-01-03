import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';



const Profile = ({sendPostThunk, posts, profile, status, userId, ...props}) => {
        return <div className={styles.profile}>
        <ProfileInfo  messageFromPopUp={props.messageFromPopUp}
         isMyPage={props.isMyPage} savePhoto={props.savePhotoThunk}
         profile={profile} status={status} updateStatus={props.updateStatusThunk} 
         saveProfileData={props.saveProfileData} isEditMode={props.isEditMode} 
         setEditProfile={props.setEditProfile} isFollowed={props.isFollowed}
         userId={userId} followUnfollow={props.followUnfollow} setMessageMode={props.setMessageMode}
         sendMessageMode={props.sendMessageMode} avatarPopup={props.avatarPopup} setPopupAvatar={props.setPopupAvatar}/>
         
        <Posts deletePost={props.deletePost} likesToggle={props.likesToggle} profile={profile} isMyPage={props.isMyPage} 
        sortByTime={props.sortByTime} sortByLikes={props.sortByLikes}  sendPostThunk={sendPostThunk} posts={posts}  />
    </div>
}

export default Profile;