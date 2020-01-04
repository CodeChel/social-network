import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import messagesReducer from './messages-reducer';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    messages: messagesReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



export default store;