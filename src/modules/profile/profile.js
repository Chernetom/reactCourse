import React from 'react';
import s from './profile.module.css';
import Posts from "./posts/posts";

const Profile = (props) => {
    return(
        <div>
            <img className={s.profile_img} src= {require('../../img/profile_back.jpg')} alt="#"/>
            <Posts posts={props.state.posts} postText={props.state.newPostText} updatePostText={props.updatePostText} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;