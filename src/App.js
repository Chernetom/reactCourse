import React from 'react';
import './App.css';
import Header from "./modules/header/header";
import SideSite from "./modules/sideSite/sideSite";
import Profile from "./modules/profile/profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MessagesContainer from "./modules/messages/messages_container";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header />
                <SideSite friend_img={props.state.friendsStatus.lastActive}/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/messages/*' element={<MessagesContainer state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
