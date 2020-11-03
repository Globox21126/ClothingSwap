import React from 'react'

function Steps() {
    return (
        <>
            <section className="wrapper steps__intro">
                <h1>Wystarczą 4 proste kroki</h1>
                <div className="decoration"></div>
            </section>
            <section className="wrapper steps__main">
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Wybierz rzeczy</h3>
                    <span>-------</span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Spakuj je</h3>
                    <span>-------</span>
                    <p>skorzystaj z worków na śmieci</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <span>-------</span>
                    <p>wybierz zaufane miejsce</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Zamów kuriera</h3>
                    <span>-------</span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </summary>
            </section>
            <section className="steps__outro">
                <div>
                    <h1>Oddaj rzeczy</h1>
                </div>
            </section>
        </>
    )
}

export default Steps
