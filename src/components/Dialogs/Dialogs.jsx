import React from "react";
import DS from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from "./DialogsItems/DialogsItem";


const Dialogs = (props)=>{
    console.log(props)
let dialogsElements = props.dialogsData.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = props.dialogsData.messages.map( m => <Message message={m.message} />);
let newMessagesElements= React.createRef();
let addMessage = () => {
    let text= newMessagesElements.current.value; 
    alert(text);
}

return(
            <div className={DS.dialogs}>
                <div className={DS.dialogsItems}>
                    {dialogsElements}
                    
                </div>
                <div className={DS.messages}>
                    {messagesElements}
                    <textarea ref={newMessagesElements}></textarea> 
                    <button onClick= {addMessage}>Отправить</button> 
                </div>
            </div>
    )
}
export default Dialogs;