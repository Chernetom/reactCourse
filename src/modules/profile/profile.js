import React from 'react';
import s from './profile.module.css';
import PostContainer from "./posts/post/post_container";

const Profile = () => {
    return(
        <div>
            <img className={s.profile_img} src= {require('../../img/profile_back.jpg')} alt="#"/>
            <PostContainer />
        </div>
    );
}

export default Profile;