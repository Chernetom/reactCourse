const FOLLOW = "FOLLOW_USER";
const UNFOLLOW = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";

let initState = {
    users: [ ]
}

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state;
    }
}

export const followUserAC = (userId) => ({type: FOLLOW, userId});
export const unfollowUserAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;