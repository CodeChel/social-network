

import * as friendsR from './friends-reducer'

import { usersAPI } from '../API/api'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'





const initialState = {
    users: [],
    friends: [],
    pageSize: 30,
    totalUsersCout: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    messageMode: false,
    messageId: 0
}


describe('Auth app reducer', () => {

    it('FOLLOW Action change following user', () => {
        const id = 1
        const action = {
            type: friendsR.FOLLOW,
            payload: id
        }
       const initialState ={
            users: [{
                id: 1,
                followed: false
            }],
            friends: [],
            pageSize: 30,
            totalUsersCout: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
            messageMode: false,
            messageId: 0
        }
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                users: [{
                    id: 1,
                    followed: true
                }]
            }
        )
        
    })

    it('UNFOLLOW Action change following user', () => {
        const id = 1
        const action = {
            type: friendsR.UNFOLLOW,
            payload: id
        }
       const initialState = {
            users: [
            {
                id: 1,
                followed: true
            }
        ],
            friends: [],
            pageSize: 30,
            totalUsersCout: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
            messageMode: false,
            messageId: 0
        }
   
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                users: [
                {
                    id: 1,
                    followed: false
                }
            ]
            }
        )
        
    })
    it('UNFOLLOW Action change following user', () => {
        const users = [{
             user: 1
            },
            {
                user: 2
            }
        ]
        const action = {
            type: friendsR.SET_USERS,
            payload: {users}
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                users: users
            }
        )
        
    })
    it('SET_CURRENT_PAGE Action change current page', () => {
        const currentPage = 2
        const action = {
            type: friendsR.SET_CURRENT_PAGE,
            payload: currentPage
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                currentPage: currentPage
            }
        )
        
    })
    it('UNFOLLOW Action change following user', () => {
        const users = [{
             user: 1
            },
            {
                user: 2
            }
        ]
        const action = {
            type: friendsR.SET_USERS,
            payload: {users}
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                users: users
            }
        )
        
    })
    it('SET_TOTAL_COUNT Action change total counter', () => {
        const totalUsersCout = 1
        const action = {
            type: friendsR.SET_TOTAL_COUNT,
            payload: totalUsersCout
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                totalUsersCout: totalUsersCout
            }
        )
        
    })
    it('TOGGLE_IS_FETCHING Action change fetching', () => {
        const isFetching = true
        const action = {
            type: friendsR.TOGGLE_IS_FETCHING,
            payload: isFetching
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                isFetching: isFetching
            }
        )
        
    })
    it('TOGGLE_IS_FOLOWING_PROGRESS Action change fetching array when is not fetching', () => {
        const isFetching = true
        const userId = 1
        const action = {
            type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
            payload: {isFetching, userId}
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                followingInProgress: [userId]
            }
        )
        
    })
    it('TOGGLE_IS_FOLOWING_PROGRESS Action change fetching array when is already fetching', () => {
        const isFetching = false
        const userId = 1
        const action = {
            type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
            payload: {isFetching, userId}
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                followingInProgress: []
            }
        )
        
    })
    it('SET_MESSAGE_MODE action change state', () => {
        const messageMode = true
        const messageId = 1
        const action = {
            type: friendsR.SET_MESSAGE_MODE,
            payload: {messageMode, messageId}
        }
      
        
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                messageId: messageId,
                messageMode: messageMode
            }
        )
        
    })
    it('ADD_MORE_USER add more users', () => {
        const users = [4,5,6]
        const action = {
            type: friendsR.ADD_MORE_USER,
            payload: users
        }
      
        const initialState ={
            users: [1,2,3]
        }
        expect(friendsR.friendsReducer(initialState, action)).toEqual(
            {
                ...initialState,
                users: [...initialState.users, ...users]
            }
        )
        
    })
})





describe('action creators should dispatch correct actions', () => {
  
    
    it('follow should dispatch correct action', async () => {
        const id = 1
        const expectedAction = {
            type: friendsR.FOLLOW,
            payload: id
        }
        expect(friendsR.follow(id)).toEqual(expectedAction)
    })

    it('unfollow should dispatch correct action', async () => {
        const id = 1
        const expectedAction = {
            type: friendsR.UNFOLLOW,
            payload: id
        }
        expect(friendsR.unfollow(id)).toEqual(expectedAction)
    })
    it('setUsers should dispatch correct action', async () => {
        const users = 1
        const expectedAction = {
            type: friendsR.SET_USERS,
            payload: {users}
        }
        expect(friendsR.setUsers(users)).toEqual(expectedAction)
    })
    it('setCurrentPage should correct dispatch action', async () => {
        const currentPage = 1
        const expectedAction = {
            type: friendsR.SET_CURRENT_PAGE,
            payload: currentPage
        }
        expect(friendsR.setCurrentPage(currentPage)).toEqual(expectedAction)
    })
    it('setTotalUsersCount should correct dispatch action', async () => {
        const totalUsersCout = 1
        const expectedAction = {
            type: friendsR.SET_TOTAL_COUNT,
            payload: totalUsersCout
        }
        expect(friendsR.setTotalUsersCount(totalUsersCout)).toEqual(expectedAction)
    })
    it('toggleIsFetching should correct dispatch action', async () => {
        const isFetching = false
        const expectedAction = {
            type: friendsR.TOGGLE_IS_FETCHING,
            payload: isFetching
        }
        expect(friendsR.toggleIsFetching(isFetching)).toEqual(expectedAction)
    })
    
    it('toggleFollowingProgress should correct dispatch action', async () => {
        const isFetching = false
        const userId = 1
        const expectedAction = {
            type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
            payload: {isFetching, userId}
        }
        expect(friendsR.toggleFollowingProgress(isFetching, userId)).toEqual(expectedAction)
    })
    it('setMessageMode should correct dispatch action', async () => {
        const messageMode = false
        const messageId = 1
        const expectedAction = {
            type: friendsR.SET_MESSAGE_MODE,
            payload: {messageMode, messageId}
        }
        expect(friendsR.setMessageMode(messageMode, messageId)).toEqual(expectedAction)
    })
    it('setMoreUsers should correct dispatch action', async () => {
        const users = 1

        const expectedAction = {
            type: friendsR.ADD_MORE_USER,
            payload: users
        }
        expect(friendsR.setMoreUsers(users)).toEqual(expectedAction)
    })     
})
jest.mock('../API/api.js')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
describe('thunks creators should dispatch actions', () => {
  
    it('getUsersThunk  should dispatch correct  actions', async () => {
        const dataRequest = {
            items: [1],
            totalCount: 1
        }
        usersAPI.getUsers.mockResolvedValueOnce(dataRequest)
        const store = mockStore({})
    
        const currentPage = 2
        const pageSize = 10
        const expectedActions = [
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: friendsR.SET_USERS,
                payload: {users: dataRequest.items}
            },
            {
                type: friendsR.SET_TOTAL_COUNT,
                payload: dataRequest.totalCount
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(friendsR.getUsersThunk(currentPage, pageSize))
        expect(storeActions).toEqual(expectedActions)
      
    })
    it('getMoreUsers  should dispatch correct  actions', async () => {
        const dataRequest = {
            items: [1],
            totalCount: 1
        }
        usersAPI.getUsers.mockResolvedValueOnce(dataRequest)
        const store = mockStore({})
    
        const currentPage = 2
        const pageSize = 10
        const expectedActions = [
            {
                type: friendsR.SET_CURRENT_PAGE,
                payload: currentPage
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: friendsR.ADD_MORE_USER,
                payload: dataRequest.items
            },
            {
                type: friendsR.SET_TOTAL_COUNT,
                payload: dataRequest.totalCount
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(friendsR.getMoreUsers(currentPage, pageSize))
        expect(storeActions).toEqual(expectedActions)
      
    })
    it('changeCurrentPageThunk  should dispatch correct  actions', async () => {
        const dataRequest = {
            items: [1]
        }
        usersAPI.getUsers.mockResolvedValueOnce(dataRequest)
        const store = mockStore({})
    
        const pageNumber = 2
        const pageSize = 10
        const expectedActions = [
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: friendsR.SET_CURRENT_PAGE,
                payload: pageNumber
            },
            {
                type: friendsR.SET_USERS,
                payload: {users: dataRequest.items}
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(friendsR.changeCurrentPageThunk(pageNumber, pageSize))
        expect(storeActions).toEqual(expectedActions)
      
    })

    it('unFollowThunk  should dispatch correct  actions', async () => {
        const id = 1
        const data = {
            resultCode: 0,
        }
        usersAPI.deleteFollow.mockResolvedValueOnce(data)
        const store = mockStore({})
    

        const expectedActions = [
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
                payload: {
                    isFetching: true,
                    userId: id
                }
            },
            {
                type: friendsR.UNFOLLOW,
                payload: id
            },
            {
                type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
                payload: {
                    isFetching: false,
                    userId: id
                }
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(friendsR.unFollowThunk(id))
        expect(storeActions).toEqual(expectedActions)
      
    })
    it('followThunk  should dispatch correct  actions', async () => {
        const id = 1
        const data = {
            resultCode: 0,
        }
        usersAPI.postFollow.mockResolvedValueOnce(data)
        const store = mockStore({})
    

        const expectedActions = [
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: true
            },
            {
                type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
                payload: {
                    isFetching: true,
                    userId: id
                }
            },
            {
                type: friendsR.FOLLOW,
                payload: id
            },
            {
                type: friendsR.TOGGLE_IS_FOLOWING_PROGRESS,
                payload: {
                    isFetching: false,
                    userId: id
                }
            },
            {
                type: friendsR.TOGGLE_IS_FETCHING,
                payload: false
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(friendsR.followThunk(id))
        expect(storeActions).toEqual(expectedActions)
      
    })
})