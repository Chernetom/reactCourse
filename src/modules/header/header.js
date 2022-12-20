import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return( <header className={s.head_app}>
        <div className={s.logo}>R</div>
        <div className={s.log_wrapper}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}

export default Header;