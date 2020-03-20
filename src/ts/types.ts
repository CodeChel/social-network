import { FOLLOW, UNFOLLOW, SET_CURRENT_PAGE, SET_TOTAL_COUNT, toggleIsFetching, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLOWING_PROGRESS, SET_MESSAGE_MODE, ADD_MORE_USER } from './../redux/friends-reducer';
import { INITIALIZED_SUCCESS } from './../redux/app-reducer';
import { SET_AVATAR, GET_CAPTHCA_SUCCESS, RESET_USER, SET_USER } from './../redux/auth-reducer';
import { type } from 'os';
export type actionType = {
    type: string
    payload?: any
}

export type dataTypeLogin = {
    id: number,
    email: string,
    login: string
}
export type setUserAuthType = {
    type: typeof SET_USER
    payload: dataTypeLogin
}

export type resetUserAuthType = {
    type: typeof RESET_USER
}

export type setCaptchaURLType = {
    type: typeof GET_CAPTHCA_SUCCESS
    payload: string
}
export type setAvatarType = {
    type: typeof SET_AVATAR
    payload: {
        avatar: string
    }
}

export type dataTypeResponse = {
    resultCode: number
    messages: string[] | [],
    data: dataTypeLogin
}

export type initiallizedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
type photoType = {
    small: null | string
    large: null | string
}
export type userType = {
    name: string,
    id: number,
    photos: photoType,
    status: null | number,
    followed: boolean
}

export type followType = {
    type: typeof FOLLOW,
    payload: number
}

export type unfollowType = {
    type: typeof UNFOLLOW,
    payload: number
}

export type currentPageType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}

export type totalUsersCoutType = {
    type: typeof SET_TOTAL_COUNT,
    payload: number
}

export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: boolean
}

export type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLOWING_PROGRESS
    payload: {
        isFetching: boolean,
        userId: number
    }
}

export type setMessageModeType = {
    type: typeof SET_MESSAGE_MODE
    payload: { 
        messageMode: boolean, 
        messageId: number 
    }
}

export type setMoreUsersType = {
    type: typeof ADD_MORE_USER 
    payload: Array <userType>
}