import appReducer from './app-reducer.js'

import { INITIALIZED_SUCCESS, initiallizedSuccess, initializeAppThunk } from './app-reducer'

import { getAuthThunk } from './auth-reducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'





const initialState = {
    initialized: false
}

describe('initial app reducer', () => {

    it('INITIALIZED_SUCCESS', () => {
        const action = {
            type: INITIALIZED_SUCCESS
        }

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            initialized: true,
        })
    })
})


describe('initiallizedSuccess action', () => {

    it('initiallizedSuccess: should create an action to set initialized ', () => {

        const expectedAction = {
            type: INITIALIZED_SUCCESS,
        }
        expect(initiallizedSuccess()).toEqual(expectedAction)
    })
})


jest.mock('./auth-reducer')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)


describe('initializeAppThunk should', () => {
  
    
    it('initializeAppThunk: should dispatch actions', async () => {

        
        const ACTION_MOCK = 'ACTION_MOCK';
        
        const store = mockStore({})
        
        getAuthThunk.mockReturnValueOnce({
            type: ACTION_MOCK
        })
        
        const expectedActions = [
            {
                type: ACTION_MOCK
            },
            {
                type: INITIALIZED_SUCCESS
            },
        ]

       await store.dispatch(initializeAppThunk())
        expect(store.getActions()).toEqual(expectedActions)
      
    })
})