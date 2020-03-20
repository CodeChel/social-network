import avatar from '../assets/img/ava.jpg'
import formatTime from '../utils/timeFormat'
import {  profileAPI } from '../API/api'

export const SEND_MESSAGE = 'messages-reducer/SEND-MESSAGE'
export const SET_NEW_DIALOG = 'messages-reducer/SET_NEW_DIALOG'
export const SEARCH_DIALOG = 'messages-reducer/SEARCH_DIALOG'
export const IS_SEARCH_MODE = 'messages-reducer/IS_SEARCH_MODE'
export const SET_USER_FOR_MESSAGE = 'messages-reducer/SET_USER_FOR_MESSAGE'
export const IS_FETCHING = 'messages-reducer/IS_FETCHING'

type dialogItemType = {
    name: string,
    userId: number,
    avatar: string,
    messages: Array <dialogItemMessageType>
}

type dialogItemMessageType = {
    message: string,
    id: number,
    date: number,
    timeFormat: string
}
type initialStateType = {
    dialogItemsData
}
const initialState = {
    dialogItemsData: [
        {
            name: 'Suarez', userId: 5081, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5081/user-small.jpg?v=13',
            messages: [
                { message: 'Hey,how are you?', id: 1, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'Great! How are you?', id: 2, right: true, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'Im fine! Go work!', id: 3,  date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'Lets go!!!', id: 4, right: true, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'Just do it!!!', id: 5,  date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'ARE U KIDDING ME?', id: 6,  date: 1574411457816, timeFormat: formatTime(new Date(1574411457816)) },
                { message: 'ops, sorry, not for you', id: 7,  date: 1574411458116, timeFormat: formatTime(new Date(1574411458116)) }
            ]

        },
        {
            name: 'Siarhei', userId: 5217, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5217/user-small.jpg?v=13', 
            messages: [
                { message: 'Hey,how are you?', id: 1, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'Great! How are you?', id: 2, right: true, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) }
            ]
        },
        {
            name: 'SeregaLucky', userId: 1670, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1670/user-small.jpg?v=13',
            messages: [
                { message: 'Hello!', id: 1, date: 1574411457616,  timeFormat: formatTime(new Date(1574411457616)) },
                {
                    message: 'A group of people born on the same day, including Rebecca (Moore) and Jack (Ventimiglia), a married couple expecting triplets in Pittsburgh, and Kevin (Hartley), a handsome television actor growing bored of his fly bachelor lifestyle.',
                    id: 2, right: true, date: 1574411457616,
                    timeFormat: formatTime(new Date(1574411457616))
                },
                { message: 'WOW!', id: 3, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'YEAH, I LIKE IT!!!', id: 4, right: true, date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) },
                { message: 'ITS AWESOME!!!', id: 5,  date: 1574411457616, timeFormat: formatTime(new Date(1574411457616)) }
            ]
        },
        {
            name: 'Andrej', userId: 4987, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/4987/user-small.jpg?v=13',
            messages: [
                { message: 'DO YOU KNOW REACT?', id: 1, date: 1564401457616, timeFormat: formatTime(new Date(1564401457616)) },
                { message: 'yes, what about u?', id: 2, right: true, date: 1564401457616, timeFormat: formatTime(new Date(1564401457616)) },
                { message: 'Me too!', id: 3, date: 1564401457616, timeFormat: formatTime(new Date(1564401457616)) },
                { message: 'React better than vue', id: 4, right: true, date: 1564401457616, timeFormat: formatTime(new Date(1564401457616)) }
            ]
        },
        {
            name: 'remboinReact', userId: 5287, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5287/user-small.jpg?v=13',
            messages: [
                { message: 'can we chat?', id: 1, date: 1564301457616, timeFormat: formatTime(new Date(1564301457616)) },
                { message: 'yes, why not?', id: 2, right: true, date: 1564301457616, timeFormat: formatTime(new Date(1564301457616)) },
                { message: 'it was a joke!', id: 3, date: 1564301457616, timeFormat: formatTime(new Date(1564301457616)) },
                { message: 'hehe, very funny', id: 4, right: true, date: 1564301457616, timeFormat: formatTime(new Date(1564301457616)) }
            ]
        },
        {
            name: 'Vladimir Tuznichenko', userId: 4948, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/4948/user-small.jpg?v=13',
            messages: [
                { message: 'DO YOU KNOW REACT?', id: 1, date: 1564201457616, timeFormat: formatTime(new Date(1564201457616)) },
                { message: 'yes, what about u?', id: 2, right: true, date: 1564201457616, timeFormat: formatTime(new Date(1564201457616)) },
                { message: 'Me too!', id: 3, date: 1564201457616, timeFormat: formatTime(new Date(1564201457616)) },
                { message: 'React better than vue', id: 4, right: true, date: 1564201457616, timeFormat: formatTime(new Date(1564201457616)) }
            ]
        },
        {
            name: 'justthefox', userId: 5414, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5414/user-small.jpg?v=13',
            messages: [
                { message: 'Hello, im fox?', id: 1, date: 1564101457616, timeFormat: formatTime(new Date(1564101457616)) },
                { message: 'are u beast?', id: 2, right: true, date: 1564101457616, timeFormat: formatTime(new Date(1564101457616)) },
                { message: 'something like that...', id: 3, date: 1564101457616, timeFormat: formatTime(new Date(1564101457616)) },
                { message: 'its scary...', id: 4, right: true, date: 1564101457616, timeFormat: formatTime(new Date(1564101457616)) },
                { message: 'I dont think so...', id: 5, date: 1564101457616, timeFormat: formatTime(new Date(1564101457616)) }
            ]
        },
        {
            name: 'React ninja', userId: 1676, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/1676/user-small.jpg?v=13',
            messages: [
                { message: 'DO YOU KNOW REACT?', id: 1, date: 1563201457616, timeFormat: formatTime(new Date(1563201457616)) },
                { message: 'yes, what about u?', id: 2, right: true, date: 1563201457616, timeFormat: formatTime(new Date(1563201457616)) },
                { message: 'Me too!', id: 3, date: 1563201457616, timeFormat: formatTime(new Date(1563201457616)) },
                { message: 'React better than vue', id: 4, right: true, date: 1563201457616, timeFormat: formatTime(new Date(1563201457616)) }
            ]
        },
        {
            name: 'daze', userId: 5053, avatar: 'https://social-network.samuraijs.com/activecontent/images/users/5053/user-small.jpg?v=13',
            messages: [
                { message: 'hu?', id: 1, date: 1563001457616, timeFormat: formatTime(new Date(1563001457616)) },
                { message: 'so-so', id: 2, right: true, date: 1563001457616, timeFormat: formatTime(new Date(1563001457616)) },
                { message: 'its sad!', id: 3, date: 1563001457616, timeFormat: formatTime(new Date(1563001457616)) }
            ]
        }
    ],
    dialogsFromSearch: null,
    isSearchMode: false,
    userForMessage: null,
    isFetching: false
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                dialogItemsData: state.dialogItemsData.map((i) => {
                    return i.userId === action.payload.id
                        ? { ...i, messages: [...i.messages, { message: action.payload.message, id: i.messages.length + 1, right: true, 
                            date: action.payload.date, timeFormat: action.payload.timeFormat }] }
                        : { ...i }
                }).sort((a, b) => { return b.messages[b.messages.length - 1].date - a.messages[a.messages.length - 1].date })
            }
        case SET_NEW_DIALOG:
            return {
                ...state,
                dialogItemsData: [...state.dialogItemsData, {
                    name: action.payload.name, userId: action.payload.userId, avatar: action.payload.photo || avatar,
                    messages: [{ message: action.payload.message, id: 1, right: true, 
                    date: action.payload.date, timeFormat: action.payload.timeFormat }]
                }].sort((a, b) => { return b.messages[b.messages.length - 1].date - a.messages[a.messages.length - 1].date })
            }
        case SEARCH_DIALOG:
            return {
                ...state,
                dialogsFromSearch: state.dialogItemsData.filter(i=>i.name.toLowerCase().includes(action.payload.word.toLowerCase()))
            }
        case IS_SEARCH_MODE:
            return{
                ...state,
                isSearchMode: action.payload
            }
        case SET_USER_FOR_MESSAGE:
            return{
                ...state,
                userForMessage: action.payload
            }    
        default: return state;
    }

}

export const sendMessage = (message, id) => ({ type: SEND_MESSAGE, payload:{message, id, date: Date.now(),  timeFormat: formatTime(new Date())  } });
export const setNewDialog = (message, userId, photo, name) => ({ type: SET_NEW_DIALOG, payload: {userId, photo, name, message, date: Date.now(), timeFormat: formatTime(new Date())} })
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, payload: isFetching})
export const setSearch = (word) => ({type: SEARCH_DIALOG, payload: {word}})
export const setSearchMode = (isMode) => ({type: IS_SEARCH_MODE, payload: isMode})
export const setUserForMessages = (photo,name) => ({type: SET_USER_FOR_MESSAGE, payload: name ? { photo, name} : null})

export const messageFromPopUp = (data, user) => (dispatch, getState) => {

    const userId = user.id || user.userId;
    const photo = user.photos.small;
    const name = user.name || user.fullName;

    if (getState().messages.dialogItemsData.find(i => i.userId === userId)) { //if dialog already exists

        dispatch(sendMessage(data.messagePopup, userId))
    }
    else {
        dispatch(setNewDialog(data.messagePopup, userId, photo, name))
    }
}


export const getUserForMessages = (userId) => async(dispatch) => {
    dispatch(setIsFetching(true))
    const response = await (profileAPI.getProfile(userId)).catch(()=>{
        dispatch(setUserForMessages(null))
    })
    
      if(response){
        const photo  = response.data.photos.small
        const name = response.data.fullName
        dispatch(setUserForMessages(photo, name))  
    } 
    dispatch(setIsFetching(false))
}

export default messagesReducer;