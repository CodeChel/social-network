import * as newsR from './news-reducer'






import { newsAPI } from '../API/api';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'





const initialState = {
    newsItems: [],
    newsCounter: 0,
    isFetching: false
}

describe('Auth app reducer', () => {

    it('SET_USER set data in state', () => {
        const news = [1,2,3]
        const action = {
            type: newsR.SET_NEWS,
            payload: { news}
        }



        expect(newsR.newsReducer(initialState, action)).toEqual({
            ...initialState,
            ...news
        })
    })

   
})



describe('news actions', () => {


    it('setNews action creater should create a correct action', () => {

        const news = [1,2,3]
        const expectedAction =
        {
            type: newsR.SET_NEWS,
            payload: { news}
        }


        expect(newsR.setUserAuth(news)).toEqual(expectedAction)

    })
    it('setNewsCounter action creater should create a correct action', () => {

        const counter = 1
        const expectedAction =
        {
            type: newsR.SET_COUNTER,
            payload: {counter}
        }


        expect(newsR.setNewsCounter(counter)).toEqual(expectedAction)

    })
    it('isFetching action creater should create a correct action', () => {

        const isFetching = true
        const expectedAction =
        {
            type: newsR.SET_FETCHING,
            payload: {isFetching}
        }


        expect(newsR.setNewsCounter(isFetching)).toEqual(expectedAction)

    })
   
})

jest.mock('../API/api.js')
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)
describe('news async actions ', () => {
    it('getNewsThunk async thunk should dispatch async actions', async () => {

        const store = mockStore({})
        const response = {
            data: {
                totalResults: 0,
                articles: [1,2,3]
            },
            status: 200

        }
  
        newsAPI.getNews.mockResolvedValueOnce(response)


        const expectedActions = [
            {
                type: newsR.SET_NEWS,
                payload: {...response.data.articles}
            },
            {
                type: newsR.SET_COUNTER,
                payload: { ...response.data.totalResults}
            },
        ]
        const storeActions = store.getActions()
        await store.dispatch(newsR.getAuthThunk())
        expect(storeActions).toEqual(expectedActions)
      
    })
    
   
})


