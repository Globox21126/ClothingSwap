import React from 'react'

function Header() {
    return (
        <section className="header">
            <section className="wrapper">
                <nav className="header__nav">
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
                <div className="header__details">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <span className="header__decoration decoration"/>
                    <div className="header__details__buttons">
                        <div>
                            <span>Oddaj</span>
                            <span>rzeczy</span>
                        </div>
                        <div>
                            <span>Zorganizuj</span>
                            <span>zbiórkę</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="header__image"/>
        </section>
    )
}

export default Header
