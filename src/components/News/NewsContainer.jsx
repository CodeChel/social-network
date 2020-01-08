import React from 'react'
import { connect } from 'react-redux'
import News from './News'
import { getNewsItems, getNewsCounter, getIsFetching, getCurrentPage } from './news-selector'
import {getNewsThunk} from '../../redux/news-reducer'







const mapStateToProps = (state) => ({
    newsItems: getNewsItems(state),
    newsCounter: getNewsCounter(state),
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state)

})


const NewsContainer = connect(mapStateToProps,{getNewsThunk})(News)

export default NewsContainer