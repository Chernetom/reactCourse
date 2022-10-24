import React from 'react';
import s from './sideSite.module.css';
import {NavLink} from "react-router-dom";

const ActiveFriends = (props) => {
    return (
        <div className={s.img_plus_title_wrapper}>
            <div className={s.img_wrapper}>
                <img className={s.active_img} src={props.img} alt="#"/>
                {props.status === 'online' ? <div className={s.small_cycle}></div> : <div></div>}
            </div>
            <div className={s.active_title}>{props.status}</div>
        </div>
    )
}

const SideSite = (props) => {
    let cycle_img = props.friend_img.map(c => <ActiveFriends img={c.img} status={c.status} />);
    return (
        <nav className={s.side_menu}>
            <div className={s.menu_wrapper}>
                <NavLink to='/profile' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>Profile</NavLink>
                <NavLink to='/friends' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>Friends</NavLink>
                <NavLink to='/messages' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>Messages</NavLink>
                <NavLink to='/news' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>News</NavLink>
                <NavLink to='/music' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>Music</NavLink>
                <NavLink to='/settings' className={ navData => navData.isActive ? s.item + ' ' +s.active : s.item }>Settings</NavLink>
                <div className={s.last_active}>Last active</div>
                <div className={s.last_active_wrapper}>
                    {cycle_img}
                </div>
            </div>

        </nav>);
}

export default SideSite;