import React from 'react';
import './App.css';
import Header from "./modules/header/header";
import SideSite from "./modules/sideSite/sideSite";
import Profile from "./modules/profile/profile";
import Messages from "./modules/messages/messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header />
                <SideSite />
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/messages' element={<Messages />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
