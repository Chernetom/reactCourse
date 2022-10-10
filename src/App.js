import React from 'react';
import './App.css';
import Header from "./modules/header";
import SideSite from "./modules/sideSite";
import Profile from "./modules/profile";

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
