import { newsAPI} from '../API/apiNews'



export const SET_NEWS = 'news-reducer/SET_NEWS'
export const SET_COUNTER = 'news-reducer/SET_COUNTER'
export const SET_FETCHING = 'news-reducer/SET_FETCHING'

const initialState = {
    newsItems: [],
    newsCounter: 0,
    isFetching: false
}

 const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                newsItems: [...action.payload.news]
            }
            case SET_COUNTER:
                return {
                    ...state,
                    newsCounter: action.payload.counter
                }
                case SET_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload.isFetching
                }      
        default: return state;

    }

}

export const setNews = (news) => ({ type: SET_NEWS, payload: {news} })
export const setNewsCounter = (counter) => ({ type: SET_COUNTER, payload: {counter} })
export const toggleFetching = (isFetching) => ({ type: SET_FETCHING, payload: {isFetching}})

export const getNewsThunk = (country='us',page=1) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await newsAPI.getNews(country, page)
    if(response.status === 200){
        dispatch(setNews(response.data.articles))
        dispatch(setNewsCounter(response.data.totalResults))
    }
    dispatch(toggleFetching(false))
}
export default newsReducer