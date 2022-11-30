import React from 'react';
import s from './posts.module.css';
import Post from "./post/post";
import NewPostContainer from "./new_post/new_post_container";

const Posts = (props) => {
    let post = props.posts.map( p => <Post descr={p.descr} like={p.like} />);
    return(
        <div className={s.under_img}>
            <NewPostContainer />

            <div className={s.profile_path_header}>My posts</div>
            {post}
        </div>
    );
}

export default Posts;