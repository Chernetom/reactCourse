import React from 'react';
import s from './profile_descr.module.css';

const ProfileDescr = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.name}>Rectorator Di Le</div>
            <div className={s.descr}>Who am I?</div>
        </div>
    );
}

export default ProfileDescr;
