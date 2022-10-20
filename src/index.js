import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addInputMessage, addPost, updateMessagesText, updatePostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText} addInputMessage={addInputMessage} updateMessagesText={updateMessagesText}/>
        </React.StrictMode>
    );
}

rerenderAllTree(state);

subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();