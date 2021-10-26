import React from "react";
import MW from './MyWale.module.css';
import Post from './Post/Post';

const MyWale = (props) =>{
  let postsElement = 
  props.posts.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value; 
    props.updateNewPostText(text);
  }
  return(
      <div className={MW.postBlock}>
        <h3> my wale</h3>
        <div>
          <div >
            <textarea onChange = {onPostChange} ref={newPostElement} 
                      value ={props.posts.newPostText}/>
          </div>
          <div>
            <button onClick= {onAddPost}>Добавить пост</button>
          </div>
        </div> 
        <div className={MW.posts}>
         {postsElement}
        </div>  
      </div>
    )
}      
export default MyWale;