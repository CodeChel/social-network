export const profileStatus = (state) => {
    return state.profilePage.status;
}
export const profilePosts = (state) => {
    return state.profilePage.posts;
}
export const getIsAuth = (state) => {
    return state.auth.isAuth;
}
export const getAuthId = (state) =>{
    return state.auth.id;
}
export const getIsEditMode = (state) =>{
    return state.profilePage.isEditMode;
}

export const getProfile = (state) => {
    return state.profilePage.profile;
}
export const getFollowed = (state) => {
    return state.profilePage.isFollowed;
}
export const getIsFetching = (state) => {
    return state.profilePage.isFetching;
}
export const getIsSendMode = (state) => {
    return state.profilePage.sendMessageMode;
}

export const getIsAvatarPopup = (state) => {
    return state.profilePage.avatarPopup;
}

export const getIsUserExist = (state) => {
    return state.profilePage.isUserExist;
}