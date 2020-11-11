import React from 'react'

function ContactUs() {
    return (
        <section className="contact__us__form">
            <form className="form wrapper">
                <h1>Skontaktuj się z nami</h1>
                <div className="decoration"></div>
                <div className="form__inputs">
                    <div>
                        <label>Wpisz swoje imię</label>
                        <input placeholder="Krzysztof" />
                    </div>
                    <div>
                        <label>Wpisz swój email</label>
                        <input placeholder="abc@xyz.pl" />
                    </div>
                </div>
                <label className="form__message">Wpisz swoją wiadomość</label>
                <input className="form__message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <button>Wyślij</button>
            </form>
            <div className="form__background">
                <h3>Copyright by Coders Lab</h3>
            </div>
        </section>
    )
}

export default ContactUs
