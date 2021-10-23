import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
  _state: {
    profile:{
    posts: [
      {id: 1, message: 'Hi,how are you?', likesCount: '15'},
      {id: 2, message: 'It is my first', likesCount: '20'}
    ],
    newPostText: ""
    
  },
    dialog:{
      dialogs: [
        {id: 1, name: 'Сергей'},
        {id: 2, name: 'Вова'},
        {id: 3, name: 'Кирилл'},
        {id: 4, name: 'Костя'},
        {id: 5, name: 'Артем'}
      ],
      messages: [ 
        {id: 1, message: 'привет'},
        {id: 2, message: 'привет'},
        {id: 3, message: 'Ккак дела?'},
        {id: 4, message: 'отлично'}
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber () {
    console.log('change');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialog = dialogsReducer(this._state.dialog, action);
    this._callSubscriber(this._state);
  }
}



export default store;