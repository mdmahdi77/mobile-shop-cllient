import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../App';
import firebaseConfig from './firebase.config';
import './Login.css'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newUserInfo = { displayName, email }
                setLoggedInUser(newUserInfo)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div className="login">
            <h1>LOGIN YOUR ACCOUNT</h1>
            <button className="mainBtn" onClick={handleGoogleSignIn}>Google In SignIn</button>
        </div>
    );
};

export default Login;