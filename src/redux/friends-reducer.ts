import { userType, actionType, followType, unfollowType, currentPageType, totalUsersCoutType, toggleIsFetchingType, toggleFollowingProgressType, setMessageModeType, setMoreUsersType } from './../ts/types';
import { usersAPI } from '../API/api'


export const FOLLOW = 'friends-reducer/FOLLOW';
export const UNFOLLOW = 'friends-reducer/UNFOLLOW';
export const SET_USERS = 'friends-reducer/SET-USERS';
export const SET_CURRENT_PAGE = 'friends-reducer/SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'friends-reducer/SET_TOTAL_COUNT';
export const TOGGLE_IS_FETCHING = 'friends-reducer/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLOWING_PROGRESS = 'friends-reducer/TOGGLE_IS_FOLOWING_PROGRESS';
export const SET_MESSAGE_MODE = 'friends-reducer/SET_MESSAGE_MODE';
export const ADD_MORE_USER = 'friends-reducer/ADD_MORE_USER';

type initialStateType = {
    users: Array <userType>,
    pageSize: number,
    totalUsersCout: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array <number>,
    messageMode: boolean,
    messageId: number
}

const initialState : initialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCout: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    messageMode: false,
    messageId: 0
}

export const friendsReducer = (state = initialState, action : actionType) : initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => action.payload === u.id ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => action.payload === u.id ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return { ...state, ...action.payload }
        case ADD_MORE_USER:
            return { ...state, users: [...state.users, ...action.payload] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCout: action.payload }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case TOGGLE_IS_FOLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(userId => userId !== action.payload.userId)

            }
        case SET_MESSAGE_MODE:
            return {
                ...state,
                ...action.payload
            }
        default: return state;

    }

}

export const follow = (id: number): followType => ({ type: FOLLOW, payload: id });
export const unfollow = (id: number): unfollowType => ({ type: UNFOLLOW, payload: id });
export const setUsers = (users: Array <userType>) => ({ type: SET_USERS, payload: { users } });
export const setCurrentPage = (currentPage: number): currentPageType => ({ type: SET_CURRENT_PAGE, payload: currentPage });
export const setTotalUsersCount = (totalUsersCout: number): totalUsersCoutType => ({ type: SET_TOTAL_COUNT, payload: totalUsersCout });
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, payload: isFetching });
export const toggleFollowingProgress = (isFetching: boolean, userId: number) : toggleFollowingProgressType => ({ type: TOGGLE_IS_FOLOWING_PROGRESS, payload: { isFetching, userId } })
export const setMessageMode = (messageMode: boolean, messageId: number): setMessageModeType => ({ type: SET_MESSAGE_MODE, payload: { messageMode, messageId } })
export const setMoreUsers = (users: Array<userType> ): setMoreUsersType => ({ type: ADD_MORE_USER, payload: users })


export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch: Function) => {

    dispatch(toggleIsFetching(true))

    const data = await (usersAPI.getUsers(currentPage, pageSize))

    
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

export const getMoreUsers = (currentPage: number, pageSize: number) => async (dispatch: Function) => {

    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    const data = await (usersAPI.getUsers(currentPage, pageSize));
    dispatch(setMoreUsers(data.items))
    
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false))

}
export const changeCurrentPageThunk = (pageNumber: number, pageSize: number) => async (dispatch: Function) => {
    dispatch(toggleIsFetching(true))

    dispatch(setCurrentPage(pageNumber))
    const data = await (usersAPI.getUsers(pageNumber, pageSize))
    dispatch(setUsers(data.items))

    dispatch(toggleIsFetching(false))
}

export const followUnfollowFlow = async (dispatch: Function, apiMethod: Function, actionCreator: Function, id: number) => {
    dispatch(toggleIsFetching(true));
    dispatch(toggleFollowingProgress(true, id));
    const data = await (apiMethod(id));
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(toggleFollowingProgress(false, id));
        dispatch(toggleIsFetching(false));
    }

}
export const unFollowThunk = (id: number) => async (dispatch: Function) => {
    await followUnfollowFlow(dispatch, usersAPI.deleteFollow, unfollow, id);
}
export const followThunk = (id: number) => async (dispatch: Function) => {
    await followUnfollowFlow(dispatch, usersAPI.postFollow, follow, id);
}

export default friendsReducer;