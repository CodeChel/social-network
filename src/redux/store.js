import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        Messages: {
            dialogItemsData : [
                {name: 'Henry Dinn' , id: 1 },
                {name: 'Michael Ross' , id: 2 },
                {name: 'Dick Irvin' , id: 3 },
                {name: 'Dafna Grass' , id: 4 }
            ],
            messagesData: [
                {message: 'Hey,how are you?', id: 1 },
                {message: 'Great! How are you?', id: 2, right: true},
                {message: 'Im fine! Go work!', id: 3},
                {message: 'Lets go!!!', id: 4, right: true},
            ],
            currentText: ''
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log('state changed');
    },
    
    subscribe (observer) {
        this._callSubscriber  = observer;
    },
  
    dispatch(action){
        this._state.Messages = messagesReducer(this._state.Messages, action);
        this._callSubscriber(this._state);
    }
}



export default store;