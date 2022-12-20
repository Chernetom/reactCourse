import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {descr: "Today i'm going to Defense of the Ancients", like: "15"},
        {descr: "Hi i'm here", like: "21"}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                descr: state.newPostText,
                like: "0"
            };
            return  {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText:action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export let addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
};
export let updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text}
};

export let setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile}
}

export const userProfile = (userId) => {
    return (dispatch) => {
        profileAPI.Profile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;