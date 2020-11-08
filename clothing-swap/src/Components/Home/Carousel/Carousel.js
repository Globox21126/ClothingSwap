import React from 'react'

function Carousel() {

    const carousel1 = {
        description: "lorem ipsum",
        collection: [
        {name: "moja fundacja", desc: "fajna fundacja", p: "co oddac"},
        {name: "moja fundacja2", desc: "fajna fundacja", p: "co oddac"},
        {name: "moja fundacja3", desc: "fajna fundacja", p: "co oddac"}]
        }

    const carousel1 = {
        line1__header: `Fundacja “Dbam o Zdrowie”`,
        line1__p: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        line1__right: `ubrania, jedzenie, sprzęt AGD, meble, zabawki`,

        line2__header: `Fundacja “Dla dzieci”`,
        line2__p: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
        line2__right: `ubrania, meble, zabawki`,

        line3__header: `Fundacja “Bez domu”`,
        line3__p: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
        line__right: `ubrania, jedzenie, ciepłe koce`
    }

    const carousel2 = {
        line1__header: `Organizacja “Lorem Ipsum 1”`,
        line1__p: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        line1__right: `Egestas, sed, tempus`,

        line2__header: `Organizacja “Lorem Ipsum 2”`,
        line2__p: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        line2__right: `Ut, aliquam, purus, sit, amet`,

        line3__header: `Organizacja “Lorem Ipsum 3”`,
        line3__p: `Scelerisque in dictum non consectetur a erat nam.`,
        line__right: `Mi, quis, hendrerit, dolor`
    }

    const carousel3 = {
        line1__header: `Zbiórka “Lorem Ipsum 1”`,
        line1__p: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        line1__right: `Egestas, sed, tempus`,

        line2__header: `Zbiórka “Lorem Ipsum 2”`,
        line2__p: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        line2__right: `Ut, aliquam, purus, sit, amet`,

        line3__header: `Zbiórka “Lorem Ipsum 3”`,
        line3__p: `Scelerisque in dictum non consectetur a erat nam.`,
        line__right: `Mi, quis, hendrerit, dolor`
    }

    const carousel = [carousel1, carousel2]





    return (
        <>
            <section className="who__we__help">
                <h1>Komu pomagamy?</h1>
                <span className="decoration"></span>
                <div className="who__we__help__carousel">
                    <div className="carousel__slide">Fundacjom</div>
                    <div className="carousel__slide">
                        <span>
                        Organizacjom 
                        </span>
                        pozarządowym
                    </div>
                    <div className="carousel__slide">
                        <span>
                        Lokalnym
                        </span>
                        zbiórkom
                    </div>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </section>
            <section className="who__we__help__details">
                <ul>
                    <li>{carousel1.line1__header}</li>
                    <li>{carousel1.line1__p}</li>
                    <li>{carousel1.line1__right}</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </>

    )
}

export default Carousel
