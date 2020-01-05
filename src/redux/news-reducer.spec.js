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

describe('News app reducer', () => {

    it('SET_NEWS set data in state', () => {
        const news = [1,2,3]
        const action = {
            type: newsR.SET_NEWS,
            payload: { news}
        }



        expect(newsR.newsReducer(initialState, action)).toEqual({
            ...initialState,
            newsItems: news
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


        expect(newsR.setNews(news)).toEqual(expectedAction)

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


        expect(newsR.toggleFetching(isFetching)).toEqual(expectedAction)

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
                type: newsR.SET_FETCHING,
                payload: {isFetching: true}
            },
            {
                type: newsR.SET_NEWS,
                payload: {news: response.data.articles}
            },
            {
                type: newsR.SET_COUNTER,
                payload: {counter: response.data.totalResults}
            },
            {
                type: newsR.SET_FETCHING,
                payload: {isFetching: false}
            }
        ]
        const storeActions = store.getActions()
        await store.dispatch(newsR.getNewsThunk())
        expect(storeActions).toEqual(expectedActions)
      
    })
    
   
})


