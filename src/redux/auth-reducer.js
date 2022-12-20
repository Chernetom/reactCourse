import {headerAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


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
              ...state, ...action.data, isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});

export const authUser = () => {
    return (dispatch) => {
        headerAPI.authMe()
            .then(response => {
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
export default authReducer;