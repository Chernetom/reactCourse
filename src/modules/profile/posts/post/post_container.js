import {addPostActionCreater, updateNewPostText} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import Posts from "../posts";

let postState = (state) => {
    return {
        postText:state.profilePage.newPostText,
        posts:state.profilePage.posts
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

const PostContainer = connect(postState, postDispatch) (Posts);

export default PostContainer;