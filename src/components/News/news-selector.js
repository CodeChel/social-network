export const getNewsItems = (state) => {
    return state.news.newsItems
}
export const getNewsCounter = (state) => {
    return state.news.newsCounter
}
export const getIsFetching = (state) => {
    return state.news.isFetching
}
export const getCurrentPage = (state) => {
    return state.news.currentPage
}