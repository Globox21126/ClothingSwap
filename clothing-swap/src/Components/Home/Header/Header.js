import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import Nav from "./Header__components/Nav";

function Header() {
    return (
        <section id="header" className="header">
            <section className="wrapper">
                <Nav />
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
