import React, {useState, useEffect} from 'react'

function Carousel() {

    const [description, setDescription] = useState(0);
    const [data, setData] = useState("");

    // const fetchAllCarousel = () => {
    //     fetch("http://localhost:3000/collection")
    //     .then(resp => resp.json())
    //     .then(collection => setData(collection))
    // }

    const fetchAllCarousel = () => {
        fetch("http://localhost:3000/carousel")
        .then(resp => resp.json())
        .then(carousel => setData(carousel))
    }

    //json-server --watch db.json

    const carousel0 = () => {
        setDescription(prev => 0)
    }
    const carousel1 = () => {
        setDescription(prev => 1)
    }
    const carousel2 = () => {
        setDescription(prev => 2)
    }

    const list = [data[description]];

    useEffect(() => {
        fetchAllCarousel();
    }, []);

    if(!data) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <section className="who__we__help">
                <h1>Komu pomagamy?</h1>
                <span className="decoration"></span>
                <div className="who__we__help__carousel">
                    <div onClick={carousel0} className="carousel__slide">Fundacjom</div>
                    <div onClick={carousel1} className="carousel__slide">
                        <span>
                        Organizacjom 
                        </span>
                        pozarządowym
                    </div>
                    <div onClick={carousel2} className="carousel__slide">
                        <span>
                        Lokalnym
                        </span>
                        zbiórkom
                    </div>
                </div>
                {list.map((el) => <p key={el.id}>{el.description}</p>)}
            </section>
            <section className="who__we__help__details wrapper">
                {/* {list.map((el) => 
                    <div className="list" key={el.id}>
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{el.collection[description].name}</h2>
                                <p>{el.collection[description].desc}</p>
                            </div>
                            <div className="list__right">
                                <p>{el.collection[description].p}</p>
                            </div>
                        </div>
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{el.collection[description].name2}</h2>
                                <p>{el.collection[description].desc2}</p>
                            </div>
                            <div className="list__right">
                                <p>{el.collection[description].p2}</p>
                            </div>
                        </div>
                        <div className="list__details">
                            <div>
                                <h2 className="list__left">{el.collection[description].name3}</h2>
                                <p>{el.collection[description].desc3}</p>
                            </div>
                            <div className="list__right">
                                <p>{el.collection[description].p3}</p>
                            </div>
                        </div>
                    </div>
                )} */}
            </section>
        </>
    )
}

export default Carousel
