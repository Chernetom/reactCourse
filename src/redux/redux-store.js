import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-redicer";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./user-reducer";

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage:messagesReducer,
        friendsStatus: navbarReducer,
        usersPage: usersReducer
    }
});

export default store;