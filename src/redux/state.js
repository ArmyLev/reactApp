const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  
  _state: {
    profile:{
    posts: [
      {id: 1, message: 'Hi,how are you?', likesCount: '15'},
      {id: 2, message: 'It is my first', likesCount: '20'}
    ],
    
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
      ]
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
  if (action.type === ADD_POST) {
      let newPost ={
        id: 5,
        message: this._state.profile.newPostText,
        likesCount: 0
      }
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = '';
      this._callSubscriber();
  }
  else if (action.type === UPDATE_NEW_POST_TEXT){
    this._state.profile.newPostText = action.newText;
    this._callSubscriber(this._state);
  }
  }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})
export default store;