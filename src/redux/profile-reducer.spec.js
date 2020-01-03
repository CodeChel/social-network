

import * as profileR from './profile-reducer'

import { usersAPI, profileAPI } from '../API/api';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'


const RealDate = Date

beforeAll(() => {
    global.Date.now = jest.fn(() => 1)
})
// new Date('2019-04-07T10:20:30Z').getTime()
afterAll(() => {
    global.Date = RealDate
})


const initialState = {
    posts: [{
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

describe('App app reducer', () => {

    it('TOGGLE_IS_FETCHING set data in state', () => {
        const isFetching = true
        const action = {
            type: profileR.TOGGLE_IS_FETCHING,
            payload: isFetching
        }



        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: isFetching
        })
    })

    it('RESET_USER_POFILE set data in state', () => {
        const initialStateBefore = {}
        const action = {
            type: profileR.RESET_USER_POFILE,
        }

        expect(profileR.profileReducer(initialStateBefore, action)).toEqual({
            ...initialState
        })
    })
    it('SEND_POST set data in state', () => {

        const tData = 1
        const post = {
            postBody: 1
        }
        const action = {
            type: profileR.SEND_POST,
            payload: { name: tData, avatar: tData, userId: tData, timeFormat: tData, post, time: tData }
        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: [
                {
                    name: tData, userId: tData, avatar: tData, time: tData, timeFormat: tData,
                    text: post.postBody, id: 3, likesCount: 0, liked: false
                },
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                },
                {
                    name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'hello world!!', userId: '1601', id: 1, likesCount: 12, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: false
                },

            ]
        })

    })

    it('SET_EDIT_PROFILE set data in state', () => {

        const mode = true
        const action = {
            type: profileR.SET_EDIT_PROFILE,
            payload: mode

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            isEditMode: mode
        })

    })
    it('setUserProfile set data in state', () => {

        const profile = 1
        const action = {
            type: profileR.SET_USER_PROFILE,
            payload: profile

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            profile: profile
        })

    })

    it('SET_USER_STATUS set data in state', () => {

        const status = 1
        const action = {
            type: profileR.SET_USER_STATUS,
            payload: status

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            status: status
        })

    })

    it('SET_USER_STATUS set data in state', () => {

        const isFollow = true
        const action = {
            type: profileR.FOLLOW_UNFOLLOW_SUCCESS,
            payload: isFollow

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            isFollowed: isFollow
        })

    })

    it('SEND_MESSAGE_MODE set data in state', () => {

        const isSendMode = true
        const action = {
            type: profileR.SEND_MESSAGE_MODE,
            payload: isSendMode

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            sendMessageMode: isSendMode
        })

    })

    it('SET_POPPUP_AVATAR set data in state', () => {

        const isPopup = true
        const action = {
            type: profileR.SET_POPPUP_AVATAR,
            payload: isPopup

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            avatarPopup: isPopup
        })

    })

    it('TOGGLE_LIKE_SUCCESS set data in state', () => {

        const isLiked = true
        const idPost = 1
        const action = {
            type: profileR.TOGGLE_LIKE_SUCCESS,
            payload: { isLiked, idPost }

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: [
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                },
                {
                    name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'hello world!!', userId: '1601', id: 1, likesCount: 13, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: true
                }
            ]
        })

    })

    it('DELETE_POST_SUCCESS delete post from state', () => {

        const idPost = 1
        const action = {
            type: profileR.DELETE_POST_SUCCESS,
            payload: idPost

        }

        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: [
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 1, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                }
            ]
        })

    })

    it('SORT_BY_TIME sort posts from state', () => {

        const action = {
            type: profileR.SORT_BY_TIME
        }

        const initialStateBefote = {
            ...initialState,
            posts: [
                {
                    name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'hello world!!', userId: '1601', id: 1, likesCount: 12, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: false
                },
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                }
            ]
        }
        expect(profileR.profileReducer(initialStateBefote, action)).toEqual({
            ...initialState,
            posts: [
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                },
                {
                    name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'hello world!!', userId: '1601', id: 1, likesCount: 12, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: false
                }
            ]
        })

    })


    it('SORT_BY_LIKES sort posts from state', () => {

        const action = {
            type: profileR.SORT_BY_LIKES
        }


        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: [
                {
                    name: 'ChelCode', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'hello world!!', userId: '1601', id: 1, likesCount: 12, time: 1574713324589, timeFormat: 'November 9, 2019, 2:46 PM', liked: false
                },
                {
                    name: 'ChelCode', userId: '1601', avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1601/user-small.jpg?v=13',
                    text: 'Whats up??!', id: 2, likesCount: 0, time: 1574713363365, timeFormat: 'November 11, 2019, 10:20 PM', liked: false
                }

            ]
        })

    })

    it('isUserExist change isUserExist state', () => {
        const isUserExist = false
        const action = {
            type: profileR.IS_USER_EXIST,
            payload: { isUserExist }
        }


        expect(profileR.profileReducer(initialState, action)).toEqual({
            ...initialState,
            isUserExist: isUserExist
        })

    })
})



jest.mock('../API/api.js')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
describe('profile async actions ', () => {
    it('sendPostThunk async thunk should dispatch async actions', async () => {
        const auth = {
            login: 1,
            avatar: 1,
            id: 1
        }
        const state = {
            auth: auth
        }
        const store = mockStore({...state})
        
        
        const post = 1
        
        const expectedActions = [
            {
                type: profileR.SEND_POST,
                payload: {
                     post,  userId: 1, name: 1, avatar: 1,
                    time: 1,  timeFormat: 'January 1, 1970, 3:00 AM'
                }
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.sendPostThunk(post))
        expect(storeActions).toEqual(expectedActions)

    })

    it('getProfileThunk async thunk should dispatch async actions', async () => {
        
        const store = mockStore({})
        const response = {
            data: 1
        }
        const userId = 1
        profileAPI.getProfile.mockResolvedValueOnce(response)
        
    
        const expectedActions = [
            {
                type: profileR.SET_USER_PROFILE,
                payload: response.data
                
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.getProfileThunk(userId))
        expect(storeActions).toEqual(expectedActions)

    })

    it('getStatusThunk async thunk should dispatch async actions', async () => {
        
        const store = mockStore({})
        const response = 1
        const userId = 1
        profileAPI.getUserStatus.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: profileR.SET_USER_STATUS,
                payload: response
                
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.getStatusThunk(userId))
        expect(storeActions).toEqual(expectedActions)

    })
    it('updateStatusThunk async thunk should dispatch async actions', async () => {
        
        const store = mockStore({})
        const response = {
            resultCode: 0
        }
        const status = 1
        profileAPI.updateUserStatus.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: profileR.SET_USER_STATUS,
                payload: status
                
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.updateStatusThunk(status))
        expect(storeActions).toEqual(expectedActions)

    })
    it('savePhotoThunk async thunk should dispatch async actions', async () => {
        
        const store = mockStore({})
        const response = {
            resultCode: 0,
            data:{
                photos: 1
            }
        }
        const photo = 1
        profileAPI.updatePhoto.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: profileR.SET_PHOTO_PROFILE,
                payload: response.data.photos
                
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.savePhotoThunk(photo))
        expect(storeActions).toEqual(expectedActions)

    })
    it('saveProfileData async thunk should dispatch async actions', async () => {
        jest.spyOn(profileR, 'getProfileThunk').mockReturnValue({type: 'MOCK'})
        const initState = {
            auth:{
                id: 1
            }
        }
        const store = mockStore({...initState})
        const response = {
            resultCode: 0,
        }
        const profile = 1
        profileAPI.saveProfileData.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: 'MOCK'
            },
            {
                type: profileR.SET_EDIT_PROFILE,
                payload: false
                
            }
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.saveProfileData(profile))
        expect(storeActions).toEqual(expectedActions)

    })
    it('getFollowedThunk async thunk should dispatch async actions', async () => {
        const id = 1
        const store = mockStore({})
        const response = false

        usersAPI.getFollow.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: profileR.FOLLOW_UNFOLLOW_SUCCESS,
                payload: response
            }
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.getFollowedThunk(id))
        expect(storeActions).toEqual(expectedActions)

    })

    it('followUnfollow async thunk should dispatch async actions', async () => {
        jest.spyOn(profileR, 'getProfileThunk').mockReturnValue({type: 'MOCK'})
        const id = 1
        const isFollow = true
        const store = mockStore({})
        const response = {
            resultCode: 0
        }

        usersAPI.postFollow.mockResolvedValueOnce(response)
        
        
        const expectedActions = [
            {
                type: profileR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: profileR.FOLLOW_UNFOLLOW_SUCCESS,
                payload: isFollow
            },
            {
                type: profileR.TOGGLE_IS_FETCHING,
                payload: false
            }
        ]
        const storeActions = store.getActions()
        await store.dispatch(profileR.followUnfollow(isFollow, id))
        expect(storeActions).toEqual(expectedActions)

    })
})