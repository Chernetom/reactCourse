import {connect} from "react-redux";
import Posts from "../Posts";

let postState = (state) => {
    return {
        postText:state.profilePage.newPostText,
        posts:state.profilePage.posts,
        userImage: state.profilePage.profile.photos.large
    }
}
let postDispatch = (dispatch) => {

}

const PostContainer = connect(postState, postDispatch) (Posts);

export default PostContainer;