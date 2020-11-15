import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'

function Header() {
    return (
        <section id="header" className="header">
            <section className="wrapper">
                <nav className="header__nav">
                    <ul className="header__login">
                        <button>Zaloguj</button>
                        <button>Załóż konto</button>
                    </ul>
                    <ul className="header__menu">
                        <button>
                            <Link activeClass="active"
                                to="header"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={5}
                                duration={300}
                                delay={200}>
                              Start
                            </Link>
                        </button>
                        <button>
                            <Link activeClass="active"
                                to="steps"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                // offset={50}
                                duration={300}
                                delay={200}>
                              O co chodzi?
                            </Link>
                        </button>
                        <button>
                            <Link activeClass="active"
                                to="about__us"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                // offset={50}
                                duration={400}
                                delay={200}>
                              O nas
                            </Link>
                        </button>
                        <button>
                            <Link activeClass="active"
                                to="fundations"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={500}
                                delay={200}>
                              Fundacja i organizacje
                            </Link>
                        </button>
                        <button>
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                // offset={50}
                                duration={600}
                                delay={200}>
                              Kontakt
                            </Link>
                        </button>
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
