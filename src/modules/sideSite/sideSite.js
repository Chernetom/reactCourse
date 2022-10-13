import React from 'react';
import s from './sideSite.module.css';

const SideSite = () => {
    return (
        <nav className={s.side_menu}>
            <div className={s.menu_wrapper}>
                <a href='/profile' className={s.item}>Profile</a>
                <a href='/messages' className={s.item}>Messages</a>
                <a href='/news' className={s.item}>News</a>
                <a href='/music' className={s.item}>Music</a>
                <a href='/settings' className={s.item}>Settings</a>
            </div>

        </nav>);
}

export default SideSite;