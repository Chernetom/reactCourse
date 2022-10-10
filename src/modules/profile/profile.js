import React from 'react';
import s from './profile.module.css';
import Posts from "./posts/posts";

const Profile = () => {
    return(<div className= {s.profile}>
        <img src='https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg' alt="#"/>
        <Posts />
    </div>);
}

export default Profile;