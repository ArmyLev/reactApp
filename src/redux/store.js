import {combineReducers, createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';

let reducers = combineReducers ({
    profileReducer,
    dialogsReducer,
    friendsReducer
});

let store = createStore(reducers);

export default store;