import React from 'react';
import s from './profile.module.css';
import PostContainer from "./posts/post/post_container";
import Preloader from "../common/Preloader/Preloader";
import UsersPhoto from "../../img/Kolyan.png";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <img className={s.profile_img} src= {require('../../img/profile_back.jpg')} alt="#"/>
            <div className={s.wrapper}>
                <div className={s.header}> Rectorator Di Le</div>
                <div className={s.description}> {props.profile.aboutMe ? props.profile.aboutMe : "Hi my name is Gustav. I am a street photographer"}</div>
                <img className={s.profile_small_img} src={props.profile.photos.large ? props.profile.photos.large : UsersPhoto} alt="#"></img>
            </div>
            <PostContainer />
        </div>
    );
}

export default Profile;