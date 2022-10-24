import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderAllTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} addInputMessage={store.addInputMessage.bind(store)} updateMessagesText={store.updateMessagesText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderAllTree(store.getState());

store.subscribe(rerenderAllTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();