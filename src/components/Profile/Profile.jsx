import React from "react";
import p from './Profile.module.css';
import MyWale from './MyWale/MyWale';
import ProfileInfo from "./Info/ProfileInfo";
const Profile = (props) =>{
  console.log(props);
  return(
    <div className= {p.profile}> 
      <ProfileInfo />
      <MyWale profile={props.profile.posts} 
              newPostText={props.profile.newPostText}
              dispatch={props.dispatch}
              />
    </div>
  ) 
}      
export default Profile;