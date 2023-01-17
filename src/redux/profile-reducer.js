import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {descr: "Today i'm going to Defense of the Ancients", like: "15"},
        {descr: "Hi i'm here", like: "21"}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                descr: action.newPost,
                like: "0"
            };
            return  {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos:action.photos}
            }


        default:
            return state;
    }
}

export let addPostActionCreater = (newPost) => {
    return {type: ADD_POST, newPost}
};

export let setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile}
}

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.Profile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export let setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const savePhoto = (file) => async (dispatch) => {
        let response = await  profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }

export default profileReducer;