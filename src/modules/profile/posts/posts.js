import React from 'react';
import s from './posts.module.css';
import Post from "./post/post";
import ProfileDescr from "../profile_descr/profile_descr";
import NewPost from "./new_post/new_post";

const Posts = (props) => {
    let post = props.posts.map( p => <Post descr={p.descr} like={p.like} />);
    return(
        <div className={s.under_img}>
            <ProfileDescr name="Rectorator Di Le" descr="Who am I?" img={require('../../../img/cickada.jpg')}/>
            <NewPost addPost={props.addPost} updatePostText={props.updatePostText} postText={props.postText}/>
            <div className={s.profile_path_header}>My posts</div>
            {post}
        </div>
    );
}

export default Posts;