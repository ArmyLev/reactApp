import React from "react";
import DS from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from "./DialogsItems/DialogsItem";

const Dialogs = (props)=>{
    
    let dialogsElements = props.dialogs.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogs.messages.map( m => <Message message={m.message}/>);

    let addMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

return(
            <div className={DS.dialogs}>
                <div className={DS.dialogsItems}>
                    {dialogsElements}
                    
                </div>
                <div className={DS.messages}>
                    {messagesElements}
                    <textarea value={props.dialogs.newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Напишите сообщение...'></textarea> 
                    <button onClick= {addMessage}>Отправить</button> 
                </div>
            </div>
    )
}
export default Dialogs;