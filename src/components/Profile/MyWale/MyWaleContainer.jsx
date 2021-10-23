import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyWale from "./MyWale";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
  return{
    posts: state.profileReducer,
    newPostText: state.profileReducer
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextActionCreator(text));
      
    }, 
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyWaleContainer = connect(mapStateToProps, mapDispatchToProps)(MyWale);

export default MyWaleContainer;