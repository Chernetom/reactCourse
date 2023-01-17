import {addPostActionCreater} from "../../../../redux/profile-reducer";
import NewPost from "./newPost";
import {connect} from "react-redux";

let postState = (state) => {
    return {
        postText:state.profilePage.newPostText
    }
}
let postDispatch = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreater(newPost));
        }
    }
}

const NewPostContainer = connect(postState, postDispatch) (NewPost);

export default NewPostContainer;