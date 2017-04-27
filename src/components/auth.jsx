import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Auth extends Component {

    render() {
        if (checkUser()) {
            return (<Redirect to={{
                pathname: '/home'
            }} />
            );
        }
        else {
            return (<Redirect to={{
                pathname: '/login'
            }} />
            );
        }
    }

}

const checkUser = () => {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    if (user != null && user.isLoggedIn) {
        return true;
    }
    else {
        return false;
    }
}

export default Auth;