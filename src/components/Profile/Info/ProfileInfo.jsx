import React from "react";
import p from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
    <div className= {p.postBlock}> 
      <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'/>
      <div className={p.descriptionBlock}>
          ava + description
      </div>  
    </div>
    )
}      
export default ProfileInfo;