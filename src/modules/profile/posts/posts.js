import React from 'react';
import s from './posts.module.css';
import Post from "./post/post";

const Posts = () => {
    return(
        <div className={s.under_img}>
            <div className='profile_info'>profile+ava</div>
            <div className='my_posts'>My posts</div>
            <div className='new_posts'>New posts</div>
            <Post />
        </div>
    );
}

export default Posts;