import React from 'react';
import s from './sideSite.module.css';

const SideSite = () => {
    return (<nav className={s.side_menu}>
        <ul>
            <li className={s.item}>Profile</li>
            <li className={s.item}>Messages</li>
            <li className={s.item}>News</li>
            <li className={s.item}>Music</li>
            <li className={s.item}>Settings</li>
            <li className={s.item}>.</li>
        </ul>
    </nav>);
}

export default SideSite;