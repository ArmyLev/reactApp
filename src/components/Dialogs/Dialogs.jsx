import React from "react";
import DS from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from "./DialogsItems/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props)=>{
    console.log(props)
let dialogsElements = props.dialogsData.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = props.dialogsData.messages.map( m => <Message message={m.message} />);
let newMessageBody = props.dialogsData.newMessageBody;

let addMessage = () => {
    props.dispatch(sendMessageCreator());
}
let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
}

return(
            <div className={DS.dialogs}>
                <div className={DS.dialogsItems}>
                    {dialogsElements}
                    
                </div>
                <div className={DS.messages}>
                    {messagesElements}
                    <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Напишите сообщение...'></textarea> 
                    <button onClick= {addMessage}>Отправить</button> 
                </div>
            </div>
    )
}
export default Dialogs;