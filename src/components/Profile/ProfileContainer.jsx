import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { resetProfile, setUserProfile, sendPostThunk, savePhotoThunk, getProfileThunk, getStatusThunk, updateStatusThunk, saveProfileData, setEditProfile,
 getFollowedThunk, followUnfollow, setMessageMode, setPopupAvatar, likesToggle, deletePost, sortByTime, sortByLikes, setIsUserExist} from './../../redux/profile-reducer';
import {messageFromPopUp} from './../../redux/messages-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { profileStatus, profilePosts, getIsAuth, getAuthId, getIsEditMode, getProfile, getFollowed, getIsFetching, getIsSendMode, getIsAvatarPopup,getIsUserExist } from './profile-selectors';
import Preloader from '../common/Preloader/Preloader';


class ProfileContainer extends React.Component {
   
     refreshProfile(){
        
        let userId = this.props.match.params.userId;
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
        this.props.getFollowedThunk(userId);
    }
    componentWillUnmount(){
        this.props.resetProfile();
        
    }
    componentDidMount(){
        this.refreshProfile()
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.userId !== this.props.match.params.userId){
            this.props.resetProfile();
            this.refreshProfile();
        }
    }
    render() {
      
        return <>
                {this.props.isFetching && < Preloader/>}
                {this.props.IsUserExist 
                 ?<Profile {...this.props} userId={this.props.match.params.userId}  isMyPage={this.props.authId.toString() === this.props.match.params.userId.toString()}   />
                 :<Redirect to='/error404' />
                }
            </>
    }   

}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: profileStatus(state),
    posts: profilePosts(state),
    isAuth: getIsAuth(state),
    authId: getAuthId(state),
    isEditMode: getIsEditMode(state),
    isFollowed: getFollowed(state),
    isFetching: getIsFetching(state),
    sendMessageMode: getIsSendMode(state),
    avatarPopup: getIsAvatarPopup(state),
    IsUserExist: getIsUserExist(state)
})


 export default compose(
    connect(mapStateToProps, { setUserProfile, sendPostThunk,  getProfileThunk, getStatusThunk, 
        updateStatusThunk, savePhotoThunk, saveProfileData, setEditProfile, resetProfile, getFollowedThunk, followUnfollow, setMessageMode, setPopupAvatar, 
        likesToggle, deletePost, sortByTime, sortByLikes, messageFromPopUp, setIsUserExist }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);