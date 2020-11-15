import React from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath} from "react-router-dom";

function Login() {
    return (
        <section className="header wrapper login">
            <Nav />
            <section className="login__form">
                <h1>Zaloguj się</h1>
                <div className="decoration"></div>
                <div className="login__box">
                    <div>
                        <label>Email</label>
                        <input />
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input type="password" />
                    </div>
                </div>
                <div>
                    <RouterPath to="/Register">
                        <button>Załóż konto</button>
                    </RouterPath>
                    <RouterPath to="/Home">
                        <button>Zaloguj się</button>
                    </RouterPath>
                </div>
            </section>
        </section>
    )
}

export default Login
