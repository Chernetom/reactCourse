import React from 'react';
import s from './profile.module.css';

const Profile = () => {
    return(<div className= {s.profile}>
        <img src='https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg' alt="#"/>
        <div className={s.under_img}>
            <div className='profile_info'>profile+ava</div>
            <div className='my_posts'>My posts</div>
            <div className='new_posts'>New posts</div>
            <div className='item'>post 1</div>
            <div className='item'>post 2</div>
        </div>
    </div>);
}

export default Profile;