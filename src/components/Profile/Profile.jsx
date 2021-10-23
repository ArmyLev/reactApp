import React from "react";
import p from './Profile.module.css';
import ProfileInfo from "./Info/ProfileInfo";
import MyWaleContainer from "./MyWale/MyWaleContainer";

const Profile = (props) =>{
  return(
    <div className= {p.profile}> 
      <ProfileInfo />
      <MyWaleContainer store={props}/>
    </div>
  ) 
}      
export default Profile;