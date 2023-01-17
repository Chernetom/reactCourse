import React from 'react';
import s from './Posts.module.css';
import Post from "./post/Post";
import NewPostContainer from "./newPost/newPostContainer";

const Posts = (props) => {
    let post = props.posts.map( p => <Post image={props.userImage} descr={p.descr} like={p.like} />);
    return(
        <div className={s.under_img}>
            <NewPostContainer />
            <div className={s.profile_path_header}>My posts</div>
            {post}
        </div>
    );
}

export default Posts;