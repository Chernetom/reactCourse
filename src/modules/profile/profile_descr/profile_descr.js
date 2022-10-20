import React from 'react';
import s from './profile_descr.module.css';

const ProfileDescr = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.name}>{props.name}</div>
            <div className={s.descr}>{props.descr}</div>
            <img className={s.profile_photo} src={props.img} alt="#"/>
        </div>
    );
}

export default ProfileDescr;
