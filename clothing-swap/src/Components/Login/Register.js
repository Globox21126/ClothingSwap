import React, {useState} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath} from "react-router-dom";


function Register() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");


    return (
        <section className="header wrapper login">
            <Nav />
            <section className="login__form">
                <h1>Zaloguj się</h1>
                <div className="decoration"></div>
                <div className="login__box">
                    <div>
                        <label>Email</label>
                        <input onChange={(e) => {setUserEmail(e.target.value);}} />
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input onChange={(e) => {setUserPassword(e.target.value);}} type="password" />
                    </div>
                    <div>
                        <label>Powtórz hasło</label>
                        <input onChange={(e) => {setValidatePassword(e.target.value);}} type="password" />
                    </div>
                </div>
                <div>
                    <RouterPath to="/Register">
                        <button>Zaloguj się</button>
                    </RouterPath>
                    <RouterPath to="/Home">
                        <button>Załóż konto</button>
                    </RouterPath>
                </div>
            </section>
        </section>
    )
}

export default Register
