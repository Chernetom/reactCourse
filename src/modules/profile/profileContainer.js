import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {userProfile} from "../../redux/profile-reducer";
import {useParams} from 'react-router-dom';



export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.userProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect (mapStateToProps, {userProfile}) (withRouter(ProfileContainer));