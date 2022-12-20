import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {authUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return(<Header {...this.props} />)
    }
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapDispatchToProps,{authUser})  (HeaderContainer);