import React, {useState, useEffect} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath} from "react-router-dom";
import fire from "../../config";


function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        clearErrors();
        fire 
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .catch((error) => {
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    break;
            }
        });
        console.log(userEmail) 
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                setHasAccount(user);
            } else {
                setHasAccount(false);
            }
        });
    };


    useEffect(() => {
        authListener();
    }, []);


    return (
        <section className="header wrapper login">
            <Nav user={hasAccount} />
            <section className="login__form">
                <h1>Zaloguj się</h1>
                <div className="decoration"></div>
                <div className="login__box">
                    <div>
                        <label>Email</label>
                        <input onChange={(e) => {setUserEmail(e.target.value);}} />
                        <p>s{emailError}</p>
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input onChange={(e) => {setUserPassword(e.target.value);}} type="password" />
                        <p>s{passwordError}</p>
                    </div>
                </div>
                <div>
                    <RouterPath to="/Register">
                        <button>Załóż konto</button>
                    </RouterPath>
                    {/* <RouterPath to="/Home"> */}
                        <button onClick={(e) => handleLogin(e)}>Zaloguj się</button>
                    {/* </RouterPath> */}
                </div>
            </section>
        </section>
    )
}

export default Login
