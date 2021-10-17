import React from "react";
import { NavLink } from "react-router-dom";
import DS from './DialogsItems.module.css';
const DialogsItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return (
            <div className={DS.dialog + ' ' + DS.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        
    )
}


export default DialogsItem;