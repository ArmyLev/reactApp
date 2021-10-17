import React from "react";
import DS from './Message.module.css';


const Message = (props) =>{
    return <div className={DS.message}>{props.message}</div>
    
}
export default Message;