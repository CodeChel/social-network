export const getUsers = (state) =>{
    return state.friendsPage.users
}

export const getPageSize = (state) =>{
    return state.friendsPage.pageSize
}

export const getTotalUsersCout = (state) =>{
    return state.friendsPage.totalUsersCout
}

export const getCurrentPage = (state) =>{
    return state.friendsPage.currentPage
}
export const getIsFetching = (state) =>{
    return state.friendsPage.isFetching
}
export const getFollowingInProgress = (state) =>{
    return state.friendsPage.followingInProgress
}
export const getMessageId = (state) =>{
    return state.friendsPage.messageId
}
export const getIsMessageMode = (state) =>{
    return state.friendsPage.messageMode
}
