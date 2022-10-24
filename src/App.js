import React from 'react';
import './App.css';
import Header from "./modules/header/header";
import SideSite from "./modules/sideSite/sideSite";
import Profile from "./modules/profile/profile";
import Messages from "./modules/messages/messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header />
                <SideSite friend_img={props.state.friendsStatus.lastActive}/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} updatePostText={props.updatePostText} addPost={props.addPost}/>}/>
                        <Route path='/messages/*' element={<Messages state={props.state.messagesPage} addInputMessage={props.addInputMessage} updateMessagesText={props.updateMessagesText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
