import React from 'react'

function Header() {
    return (
        <section className="header">
            <nav>
                <ul className="header__login">
                    <li>Zaloguj</li>
                    <li>Załóż konto</li>
                </ul>
                <ul className="header__menu">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header
