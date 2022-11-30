
import {addPostActionCreater, updateNewPostText} from "../../../../redux/profile-reducer";
import NewPost from "./new_post";
import {connect} from "react-redux";

let postState = (state) => {
    return {
        postText:state.profilePage.newPostText
    }
}
let postDispatch = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostText(text));
        }
    }
}

const NewPostContainer = connect(postState, postDispatch) (NewPost);

export default NewPostContainer;