import React from 'react';
import './App.css';
import Header from "./modules/header/header";
import SideSite from "./modules/sideSite/sideSite";
import Profile from "./modules/profile/profile";

function App() {
  return (
      <div className='app-wrapper'>
        <Header />
        <SideSite />
        <Profile />
      </div>
  );
}

export default App;
