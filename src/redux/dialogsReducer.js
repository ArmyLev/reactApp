const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState , action) => {
    let stateCopy = {
      ...state,
      messages: [...state.messages]
    };
    console.log(stateCopy);
    switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
        stateCopy.newMessageBody = action.body;
        return stateCopy;

      case SEND_MESSAGE:
        let body = stateCopy.newMessageBody;
        stateCopy.messages.push({id: 5, message: body});
        stateCopy.newMessageBody = '';
        return stateCopy;

      default:
        return state;
    }      
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;