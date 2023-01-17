import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";


let initState = {
    userId: 2,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
              ...state, ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}});

export const authUser = () => async (dispatch) => {
       let response = await authAPI.authMe()
        if(response.resultCode === 0) {
            let {id, email, login} = response.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }


export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(authUser());
                } else {
                    let action = stopSubmit("login", {email: "Enail is wrong"});
                    dispatch(action);
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;