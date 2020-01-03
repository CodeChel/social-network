import { profileAPI } from '../API/api'
import { stopSubmit } from 'redux-form'
import { usersAPI } from '../API/api'

import * as profileR from './profile-reducer'

export const SEND_POST = 'profile-reducer/SEND_POST'
export const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE'
export const SET_USER_STATUS = 'profile-reducer/SET_USER_STATUS'
export const SET_PHOTO_PROFILE = 'profile-reducer/SET_PHOTO_PROFILE'
export const SET_EDIT_PROFILE = 'profile-reducer/SET_EDIT_PROFILE'
export const RESET_USER_POFILE = 'profile-reducer/RESET_USER_POFILE'
export const FOLLOW_UNFOLLOW_SUCCESS = 'profile-reducer/FOLLOW_UNFOLLOW_SUCCESS'
export const TOGGLE_IS_FETCHING = 'profile-reducer/TOGGLE_IS_FETCHING'
export const SEND_MESSAGE_MODE = 'profile-reducer/SEND_MESSAGE_MODE'
export const SET_POPPUP_AVATAR = 'profile-reducer/SET_POPPUP_AVATAR'
export const TOGGLE_LIKE_SUCCESS = 'profile-reducer/TOGGLE_LIKE_SUCCESS'
export const DELETE_POST_SUCCESS = 'profile-reducer/DELETE_POST_SUCCESS'
export const SORT_BY_TIME = 'profile-reducer/SORT_BY_TIME'
export const SORT_BY_LIKES = 'profile-reducer/SORT_BY_LIKES'
export const IS_USER_EXIST = 'profile-reducer/IS_USER_EXIST'

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
}


const initialState = {
    posts: [
        {
            name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
            text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
        },
        {
            name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
            text: 'hello world!!', userId: '1601', id: 1, likesCount: 12, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: false
        }],
    currentTextPost: '',
    profile: null,
    status: '',
    isEditMode: false,
    isFollowed: false,
    isFetching: false,
    sendMessageMode: false,
    avatarPopup: false,
    isUserExist: true
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_POST:
            return {
                ...state,
                posts: [{
                    text: action.payload.post.postBody, time: action.payload.time, id: state.posts.length + 1, 
                    likesCount: 0, timeFormat: action.payload.timeFormat, liked: false, name: action.payload.name, 
                    avatar: action.payload.avatar, userId: action.payload.userId
                }, ...state.posts],
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.payload }
        case SET_USER_STATUS:
            return { ...state, status: action.payload }
        case SET_PHOTO_PROFILE:
            return { ...state, profile: { ...state.profile, photos: action.payload } }
        case SET_EDIT_PROFILE:
            return { ...state, isEditMode: action.payload }
        case RESET_USER_POFILE:
            return initialState
        case FOLLOW_UNFOLLOW_SUCCESS:
            return { ...state, isFollowed: action.payload }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case SEND_MESSAGE_MODE:
            return { ...state, sendMessageMode: action.payload }
        case SET_POPPUP_AVATAR:
            return { ...state, avatarPopup: action.payload }
        case TOGGLE_LIKE_SUCCESS:
            return { ...state, posts: state.posts.map(p => 
                action.payload.idPost === p.id 
                ? { ...p, liked: action.payload.isLiked, likesCount: action.payload.isLiked 
                    ? p.likesCount + 1 
                    : p.likesCount - 1 } 
                : p) }
        case DELETE_POST_SUCCESS:
            return { ...state, posts: state.posts.filter(p => 
                p.id !== action.payload).map((p, index) => { return { ...p, id: index + 1 } }) }
        case SORT_BY_TIME:
            return { ...state, posts: [...state.posts.sort((a, b) => { return b.time - a.time })] }
        case SORT_BY_LIKES:
            return { ...state, posts: [...state.posts.sort((a, b) => { return b.likesCount - a.likesCount })] }
        case IS_USER_EXIST:
            return {...state, ...action.payload}    
        default: return state

    }

}




export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching })
export const resetProfile = () => ({ type: RESET_USER_POFILE })
export const sendPost = (post, name, avatar, userId) => ({ type: SEND_POST, payload: {post, timeFormat: new Date(Date.now()).toLocaleString("en-US", options), time: Date.now(), name, avatar, userId} })


export const setEditProfile = (mode) => ({ type: SET_EDIT_PROFILE, payload: mode })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, payload: status })
export const setFollowUnfollow = (isFollow) => ({ type: FOLLOW_UNFOLLOW_SUCCESS, payload: isFollow })
export const setMessageMode = (isSendMode) => ({ type: SEND_MESSAGE_MODE, payload: {isSendMode} })
export const setPopupAvatar = (isPopup) => ({ type: SET_POPPUP_AVATAR, payload: {isPopup} })
export const likesToggle = (isLiked, idPost) => ({ type: TOGGLE_LIKE_SUCCESS, payload: {isLiked, idPost} })
export const deletePost = (idPost) => ({ type: DELETE_POST_SUCCESS, payload: idPost })
export const sortByTime = () => ({ type: SORT_BY_TIME })
export const sortByLikes = () => ({ type: SORT_BY_LIKES })
export const setIsUserExist = (isUserExist) => ({ type: IS_USER_EXIST, payload: {isUserExist} })
export const savePhotoSucсess = (photos) => ({ type: SET_PHOTO_PROFILE, payload: photos })
export const sendPostThunk = (post) => (dispatch, getState) => {

    const name = getState().auth.login
    const avatar = getState().auth.avatar
    const userId = getState().auth.id
    dispatch(sendPost(post, name, avatar, userId))
}
export const getProfileThunk = (userId) => async (dispatch) => {
    
    
    const response = await (profileAPI.getProfile(userId)).catch(()=>{
        dispatch(setIsUserExist(false))
    })
    
      if(response){
          
        dispatch(setUserProfile(response.data))  
    } 

      
    
     
}



export const getStatusThunk = (userId) => async (dispatch) => {
    const data = await (profileAPI.getUserStatus(userId))

    dispatch(setUserStatus(data))

}
export const updateStatusThunk = (status) => async (dispatch) => {
    const data = await (profileAPI.updateUserStatus(status))

    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }

}
export const savePhotoThunk = (photo) => async (dispatch) => {
    const data = await (profileAPI.updatePhoto(photo))

    if (data.resultCode === 0) {
        dispatch(savePhotoSucсess(data.data.photos))
    }

}
export const saveProfileData = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await (profileAPI.saveProfileData(profile))


    if (response.resultCode === 0) {
        dispatch(profileR.getProfileThunk(userId))
        dispatch(setEditProfile(false))
    } else {
        let number = response.messages[0].indexOf('>')
        let test = response.messages[0].slice(number + 1, -1).toLowerCase()
        dispatch(stopSubmit('edit-profile', { 'contacts': { [test]: test + ' incorrect' } }))
    }
}
export const getFollowedThunk = (id) => async (dispatch) => {
    const data = await (usersAPI.getFollow(id))
    dispatch(setFollowUnfollow(data))

}
export const followUnfollow = (isFollow, id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const data =
        isFollow
            ? await usersAPI.postFollow(id)
            : await usersAPI.deleteFollow(id)
    if (data.resultCode === 0) {
        dispatch(setFollowUnfollow(isFollow))
        dispatch(toggleIsFetching(false))
    }


}
export default profileReducer