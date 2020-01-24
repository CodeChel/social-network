import { newsAPI} from '../API/apiNews'



export const SET_NEWS = 'news-reducer/SET_NEWS'
export const SET_COUNTER = 'news-reducer/SET_COUNTER'
export const SET_FETCHING = 'news-reducer/SET_FETCHING'
export const SET_CURRENT_PAGE = 'news-reducer/SET_CURRENT_PAGE'

const initialState = {
    newsItems: [],
    newsCounter: 0,
    isFetching: false,
    currentPage: 1
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
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.payload.pageNumber
                }          
        default: return state

    }

}

export const setNews = (news) => ({ type: SET_NEWS, payload: {news} })
export const setNewsCounter = (counter) => ({ type: SET_COUNTER, payload: {counter} })
export const toggleFetching = (isFetching) => ({ type: SET_FETCHING, payload: {isFetching}})
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, payload: {pageNumber} })


export const getNewsThunk = (country='us',page=1, pageSize=10) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await newsAPI.getNews(country, page, pageSize)     
    if(response.status === 200){
        dispatch(setNews(response.data.articles))
        dispatch(setNewsCounter(response.data.totalResults))
        dispatch(setCurrentPage(page))
    }
    dispatch(toggleFetching(false))
}
export default newsReducer