
import {connect} from "react-redux";
import Users from "./usersСlass";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followUserAC(userid))
        },
        unfollow: (userid) => {
            dispatch(unfollowUserAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;