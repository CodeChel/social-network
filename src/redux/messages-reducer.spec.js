

import * as messagesR from './messages-reducer'
import formatTime from '../utils/timeFormat' 
import {profileAPI} from '../API/api'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'




const initialState = {
    dialogItemsData: [ 
        {
            name: 'daze', userId: 5053, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5053/user-small.jpg?v=13',
            messages: [
                { message: 'hu?', id: 1, date: 1, timeFormat: 1 },
            ]
        }    
    ],
    dialogsFromSearch: null,
    isSearchMode: false,
    userForMessage: null,
    isFetching: false
}
const RealDate = Date


beforeAll(() => {
  global.Date.now = jest.fn(() => 1)
})
// new Date('2019-04-07T10:20:30Z').getTime()
afterAll(() => {
  global.Date = RealDate
})

jest.mock('../utils/timeFormat.js')
formatTime.mockReturnValue(1)

describe('Auth app reducer', () => {
    
    it('sendMessage Action should set new correct message', () => {
        
        const message = 1
        const id = 5053
        const action = {
            type: messagesR.SEND_MESSAGE,
            payload: {
                message: message,
                id: id, 
                date: 1,
                timeFormat: 1,
            }
        }
 
        
        expect(messagesR.messagesReducer(initialState, action)
        .dialogItemsData[0].messages[1]).toEqual(
            { message: 1, right: true, id: 2, date: 1, timeFormat: 1 }, 
        )
    })
    it('setNewDialog Action should set new correct dialog', () => {

        const message = 1
        const userId = 1
        const photo = 1
        const name = 1
        const action = {
            type: messagesR.SET_NEW_DIALOG,
            payload: {
                userId, 
                photo,
                name,
                message,
                date: 2,
                timeFormat: 1,
            }
        }
 
        
        expect(messagesR.messagesReducer(initialState, action)
        .dialogItemsData[0]).toEqual(
            {
                name: 1, userId: userId, avatar: 1,
                messages: [
                    { message, id: 1, right: true, date: 2, timeFormat: 1 },
                ]
            }    
        )
    })
   
    it('setSearch Action should sort dialogs  correctly', () => {

        const word = 'daze'
       
        formatTime.mockReturnValue(1)
        const action = {
            type: messagesR.SEARCH_DIALOG,
            payload: {
                word
            }
        }
 
        
        expect(messagesR.messagesReducer(initialState, action)).toEqual(
           {
            ...initialState,
            dialogsFromSearch:
            [{
                name: 'daze', userId: 5053, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5053/user-small.jpg?v=13',
                messages: [
                    { message: 'hu?', id: 1, date: 1, timeFormat: formatTime(new Date(1563001457616)) },
                ]
            }]  
        }   
        )
    })
    it('setSearchMode AC should set searchMode', () => {

        const isMode = true
       
        formatTime.mockReturnValue(1)
        const action = {
            type: messagesR.IS_SEARCH_MODE,
            payload: isMode
        }
 
        
        expect(messagesR.messagesReducer(initialState, action)).toEqual(
           {
            ...initialState,
            isSearchMode: isMode
        }   
        )
    })
    it('setUserForMessages AC should set searchMode', () => {

        const name = 1
        const photo = 1

        formatTime.mockReturnValue(1)
        const action = {
            type: messagesR.SET_USER_FOR_MESSAGE,
            payload: {
                name, photo
            }
        }
 
        
        expect(messagesR.messagesReducer(initialState, action)).toEqual(
           {
            ...initialState,
            userForMessage: { name, photo}
        }   
        )
    })
})




describe('action creators should dispatch correct actions', () => {
  
    
    it('sendMessage should dispatch correct action',  () => {
        const id = 1
        const message = 1
        const expectedAction = {
            type: messagesR.SEND_MESSAGE,
            payload: {
                message,
                id,
                date: 1,
                timeFormat: 1
            }
        }
        expect(messagesR.sendMessage(message,id)).toEqual(expectedAction)
    })
    it('setNewDialog should dispatch correct action',  () => {
        const id = 1
        const message = 1
        const photo = 1
        const name = 1
        const expectedAction = {
            type: messagesR.SET_NEW_DIALOG,
            payload: {
                message,
                userId: id,
                photo,
                name,
                date: 1,
                timeFormat: 1
            }
        }
        expect(messagesR.setNewDialog(message,id,photo,name)).toEqual(expectedAction)
    })
    
    it('setIsFetching should dispatch correct action',  () => {
        const isFetching = true
   
        const expectedAction = {
            type: messagesR.IS_FETCHING,
            payload: isFetching
        }
        expect(messagesR.setIsFetching(isFetching)).toEqual(expectedAction)
    })

    it('setSearch should dispatch correct action',  () => {
        const word = 1
   
        const expectedAction = {
            type: messagesR.SEARCH_DIALOG,
            payload: {word}
        }
        expect(messagesR.setSearch(word)).toEqual(expectedAction)
    })

    it('setSearchMode should dispatch correct action',  () => {
        const isMode = true
   
        const expectedAction = {
            type: messagesR.IS_SEARCH_MODE,
            payload: isMode
        }
        expect(messagesR.setSearchMode(isMode)).toEqual(expectedAction)
    })
    it('setUserForMessages should dispatch correct action',  () => {
        const photo = 1
        const name = 1

        const expectedAction = {
            type: messagesR.SET_USER_FOR_MESSAGE,
            payload: {photo, name}
        }
        expect(messagesR.setUserForMessages(photo, name)).toEqual(expectedAction)
  
    })
})


jest.mock('../API/api.js')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
describe('thunks creators should dispatch actions', () => {
  
    it('getUserForMessages  should dispatch correct  actions', async () => {
        const userId = 1
        const response = {
            data: {
                photos: {
                    small: 1
                },
               fullName: 1 
            }
        }
        profileAPI.getProfile.mockResolvedValueOnce(response)
        const store = mockStore({})
    
   
        const expectedActions = [
            {
                type: messagesR.IS_FETCHING,
                payload: true
            },
            {
                type: messagesR.SET_USER_FOR_MESSAGE,
                payload: {
                    photo: response.data.photos.small, 
                    name: response.data.fullName
                }
            }
            ,
            {
                type: messagesR.IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(messagesR.getUserForMessages(userId))
        expect(storeActions).toEqual(expectedActions)
      
    })

    
})