import React from 'react';
import s from './profile.module.css';
import Posts from "./posts/posts";

const Profile = () => {
    return(<div className={s.profile}>
        <img className={s.profile_img} src= {require('../../img/profile_back.jpg')} alt="#"/>

        <Posts />
    </div>);
}

export default Profile;