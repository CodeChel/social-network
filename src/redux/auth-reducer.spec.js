

import * as authR from './auth-reducer'

import { authAPI, securityAPI, profileAPI } from '../API/api';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'





const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
    avatar: null
}

describe('Auth app reducer', () => {

    it('SET_USER set data in state', () => {
        const data = {
            id: 1,
            email: 1,
            login: 1,
            captchaURL: null,
            avatar: 1
        }
        const action = {
            type: authR.SET_USER,
            payload: { ...data }
        }



        expect(authR.authReducer(initialState, action)).toEqual({
            ...initialState,
            ...data,
            isAuth: true,
        })
    })

    it('RESET_USER reset state to initial', () => {

        const action = {
            type: authR.RESET_USER
        }

        expect(authR.authReducer(initialState, action)).toEqual({
            ...initialState
        })
    })
    it('GET_CAPTHCA_SUCCESS set captcha to state', () => {
        const captchaURL = '123'
        const action = {
            type: authR.GET_CAPTHCA_SUCCESS,
            payload: captchaURL
        }

        expect(authR.authReducer(initialState, action)).toEqual({
            ...initialState,
            captchaURL: captchaURL
        })
    })
    it('SET_AVATAR set avatar to state', () => {
        const avatar = '123'
        const action = {
            type: authR.SET_AVATAR,
            payload: { avatar }
        }

        expect(authR.authReducer(initialState, action)).toEqual({
            ...initialState,
            avatar: avatar
        })
    })
})



describe('auth actions', () => {


    it('setUserAuth: should dispatch actions with data', () => {

        const data = {
            id: 1,
            email: 1,
            login: 1,
            captchaURL: null,
            avatar: 1
        }
        const expectedAction =
        {
            type: authR.SET_USER,
            payload: { ...data }
        }


        expect(authR.setUserAuth(data)).toEqual(expectedAction)

    })
    it('resetUserAuth: should dispatch action', () => {


        const expectedAction =
        {
            type: authR.RESET_USER,
        }

        expect(authR.resetUserAuth()).toEqual(expectedAction)

    })
    it('setCaptcha: should dispatch action with payload', () => {

        const captchaURL = '123'
        const expectedAction =
        {
            type: authR.GET_CAPTHCA_SUCCESS,
            payload: captchaURL
        }

        expect(authR.setCaptcha(captchaURL)).toEqual(expectedAction)
    })
    it('setAvatar: should dispatch action with payload', () => {

        const avatar = '123'
        const expectedAction =
        {
            type: authR.SET_AVATAR,
            payload: { avatar }
        }

        expect(authR.setAvatar(avatar)).toEqual(expectedAction)
    })
})

jest.mock('../API/api.js')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
describe('auth async actions ', () => {
    it('getAuthThunk async thunk should dispatch async actions', async () => {

        const store = mockStore({})
        const dataAuth = {
            data:{
                id: 1601,
                login: "ChelCode",
                email: "grust332@gmail.com",
            },
            resultCode: 0
        }
        const dataProfile = {
            data:{
               photos: {
                   small: '111'
               }
            }
        }
        authAPI.getAuth.mockResolvedValueOnce(dataAuth)
        profileAPI.getProfile.mockResolvedValueOnce(dataProfile)

        const expectedActions = [
            {
                type: authR.SET_USER,
                payload: {...dataAuth.data}
            },
            {
                type: authR.SET_AVATAR,
                payload: {avatar: dataProfile.data.photos.small }
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(authR.getAuthThunk())
        expect(storeActions).toEqual(expectedActions)
      
    })
    
    it('logInThunk async thunk should dispatch async actions', async () => {
        const ACTION_MOCK = 'ACTION_MOCK'
         jest.spyOn(authR, 'getAuthThunk').mockReturnValue ( {
                type: ACTION_MOCK
            }
        )     
        const store = mockStore({})
        const dataLogin = {
            data:{
                userId: 1
            },
            resultCode: 0
        }
        const dataForm = {
            login: "1",
            password: "1",
            rememberMe: false,
            captcha: null,
        }
        authAPI.logIn.mockResolvedValueOnce({...dataLogin})

 
        const expectedActions = [
            {
                type: ACTION_MOCK,
            }
        ]
         const storeActions = store.getActions()
         await store.dispatch(authR.logInThunk(dataForm))
        expect(storeActions).toEqual(expectedActions)
    
   
    })
     
    it('getCaptcha async thunk should dispatch async actions', async () => {
        const dataCaptcha = {
            url: '123'
        }
        securityAPI.getCaptcha.mockResolvedValueOnce({...dataCaptcha})
        const store = mockStore({})

 
        const expectedActions = [
            {
                type: authR.GET_CAPTHCA_SUCCESS,
                payload: dataCaptcha.url
            }
        ]
         const storeActions = store.getActions()
         await store.dispatch(authR.getCaptcha())
        expect(storeActions).toEqual(expectedActions)
   
    })
    it('logOutThunk async thunk should dispatch async actions', async () => {
        const datLogOut = {
            resultCode: 0
        }
        authAPI.logOut.mockResolvedValueOnce({...datLogOut})
        const store = mockStore({})
        const expectedActions = [
            {
                type: authR.RESET_USER,
            }
        ]
         const storeActions = store.getActions()
         await store.dispatch(authR.logOutThunk())
        expect(storeActions).toEqual(expectedActions)
   
    })

})

