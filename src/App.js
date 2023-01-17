import React from 'react';
import './App.css';
import SideSite from "./modules/sideSite/sideSite";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MessagesContainer from "./modules/messages/messagesContainer";
import UsersContainer from "./modules/users/usersContainer";
import ProfileContainer from "./modules/profile/profileContainer";
import HeaderContainer from "./modules/header/headerContainer";
import Login from "./modules/login/Login";
import Preloader from "./modules/common/Preloader/Preloader";




function App(props) {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <HeaderContainer />
                <SideSite isAuth={props.state.auth.isAuth} friend_img={props.state.friendsStatus.lastActive}/>
                <div className='app_wrapper_content'>
                    <React.Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route path='/' element={<Navigate to={'/profile'} />}/>
                            <Route path='/profile' element={<ProfileContainer />}/>
                            <Route path='/profile/:userId' element={<ProfileContainer />}/>
                            <Route path='/messages/*' element={<MessagesContainer />}/>
                            <Route path='/users' element={<UsersContainer />}/>
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
