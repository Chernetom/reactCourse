import React from 'react';
import s from './posts.module.css';
import Post from "./post/post";
import ProfileDescr from "../profile_descr/profile_descr";
import NewPost from "./new_post/new_post";

const Posts = () => {
    return(
        <div className={s.under_img}>
            <ProfileDescr />
            <img className={s.profile_photo} src={require('../../../img/cickada.jpg')} alt="#"/>
            <NewPost />
            <div className={s.profile_path_header}>My posts</div>
            <Post descr="Today i'm going to Defense of the Ancients" like= '15'/>
            <Post descr="Hi i'm here" like= '21'/>
        </div>
    );
}

export default Posts;