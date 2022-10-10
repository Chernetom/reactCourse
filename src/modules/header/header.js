import React from 'react';
import s from './header.module.css';

const Header = () => {
    return( <header className={s.head_app}>
        <img src="https://avatars.mds.yandex.net/i?id=119d5d1ba22f00076b0c8ac2cd73941f-5234560-images-thumbs&n=13" alt="La"/>
    </header>);
}

export default Header;