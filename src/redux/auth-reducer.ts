import { actionType, dataTypeLogin, setUserAuthType, resetUserAuthType, setCaptchaURLType, setAvatarType, dataTypeResponse } from './../ts/types';
import { authAPI, securityAPI, profileAPI } from '../API/api'
import { stopSubmit } from 'redux-form'

import * as authR from './auth-reducer'

export const SET_USER = 'auth-reducer/SET_USER'
export const RESET_USER = 'auth-reducer/RESET_USER'
export const GET_CAPTHCA_SUCCESS = 'auth-reducer/GET_CAPTHCA_SUCCESS'
export const SET_AVATAR = 'auth-reducer/SET_AVATAR'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as null | string,
    avatar: null as null | string
}



export const authReducer = (state = initialState, action: actionType): typeof initialState => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case GET_CAPTHCA_SUCCESS:
            return {
                ...state,
                captchaURL: action.payload
            }
        case RESET_USER:
            return {
                ...initialState
            }
        case SET_AVATAR:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }

}


export const setUserAuth = (data: dataTypeLogin): setUserAuthType => ({ type: SET_USER, payload: { ...data } });
export const resetUserAuth = (): resetUserAuthType => ({ type: RESET_USER });
export const setCaptcha = (captchaURL: string): setCaptchaURLType => ({ type: GET_CAPTHCA_SUCCESS, payload: captchaURL })
export const setAvatar = (avatar: string): setAvatarType => ({ type: SET_AVATAR, payload: { avatar } })



export const getAuthThunk = () => async (dispatch: Function) => {
    const data: dataTypeResponse = await (authAPI.getAuth())
    if (data.resultCode === 0) {
        dispatch(setUserAuth(data.data))
        const response = await profileAPI.getProfile(data.data.id)
        dispatch(setAvatar(response.data.photos.small))
    }
}
export const logInThunk = (dataForm: Object) => async (dispatch: Function) => {
    const data = await authAPI.logIn(dataForm)

    if (data.resultCode === 0) {
        await dispatch(authR.getAuthThunk())

    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        let messages = data.messages.length ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: messages }))
    }
}


export const getCaptcha = () => async (dispatch: Function) => {
    const response = await (securityAPI.getCaptcha())
    const captcha = response.url
    dispatch(setCaptcha(captcha))
}
export const logOutThunk = () => async (dispatch: Function) => {
    const data = await (authAPI.logOut())
    if (data.resultCode === 0) {
        dispatch(resetUserAuth())
    }
}


export default authReducer