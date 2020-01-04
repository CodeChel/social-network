import React from 'react'
import { connect } from 'react-redux'
import { toggleFollowingProgress, getUsersThunk, changeCurrentPageThunk, unFollowThunk, followThunk, setMessageMode, getMoreUsers} from '../../redux/friends-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getUsers, getPageSize, getTotalUsersCout, getCurrentPage, getIsFetching, getFollowingInProgress, getMessageId, getIsMessageMode } from './user-selectors'

 


class UsersContainer extends React.Component {

    componentDidMount() {
        const { pageSize} = this.props
        this.props.getUsersThunk(1, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const pageSize = this.props.pageSize
        this.props.changeCurrentPageThunk(pageNumber, pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users {...this.props} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCout(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        messageId: getMessageId(state),
        isMessageMode: getIsMessageMode(state)
    }
}




export default compose(
    connect(mapStateToProps, {
        toggleFollowingProgress, getUsersThunk, changeCurrentPageThunk, unFollowThunk, followThunk, setMessageMode, getMoreUsers
     }),
    withAuthRedirect
)(UsersContainer)