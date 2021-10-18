import React from "react";
import MW from './MyWale.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';


const MyWale = (props) =>{
  let postsElement = props.profile.map( p => <Post message={p.message} likesCount={p.likesCount} /> )
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value; 
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value; 
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return(
      <div className={MW.postBlock}>
        <h3> my wale</h3>
        <div>
          <div >
            <textarea onChange = {onPostChange} ref={newPostElement} 
                      value ={props.newPostText}/>
          </div>
          <div>
            <button onClick= {addPost}>Добавить пост</button>
          </div>
        </div> 
        <div className={MW.posts}>
         {postsElement}
        </div>  
      </div>
    )
}      
export default MyWale;