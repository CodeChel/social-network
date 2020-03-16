import { FOLLOW } from './../redux/friends-reducer';
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