import React from 'react';
import './App.css';
import SideSite from "./modules/sideSite/sideSite";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MessagesContainer from "./modules/messages/messages_container";
import UsersContainer from "./modules/users/usersContainer";
import ProfileContainer from "./modules/profile/profileContainer";
import HeaderContainer from "./modules/header/headerContainer";




function App(props) {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <HeaderContainer />
                <SideSite friend_img={props.state.friendsStatus.lastActive}/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer />}/>
                        <Route path='/messages/*' element={<MessagesContainer state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                        <Route path='/users' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
