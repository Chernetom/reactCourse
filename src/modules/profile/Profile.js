import React from 'react';
import s from './Profile.module.css';
import PostContainer from "./posts/post/postContainer";
import Preloader from "../common/Preloader/Preloader";
import UsersPhoto from "../../img/Kolyan.png";
import ProfileStatusWithHooks from "./profileStatus/profileStatusWithHooks";

const Profile = (props) => {

    // const onMainPhotoSelected = (e) => {
    //     if(e.target.files.length) {
    //         props.savePhoto(e.target.files.length[0]);
    //     }
    // }

    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <img className={s.profile_img} src= {require('../../img/profile_back.jpg')} alt="#"/>
            <div className={s.wrapper}>
                <div className={s.header}> Rectorator Di Le</div>
                <ProfileStatusWithHooks className={s.description} status={props.status} updateStatus={props.updateStatus}/>
                {/*{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}*/}
                <img className={s.profile_small_img} src={props.profile.photos.large ? props.profile.photos.large : UsersPhoto} alt="#"></img>
            </div>
            <PostContainer />
        </div>
    );
}

export default Profile;