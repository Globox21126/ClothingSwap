import React from 'react'
import Header from "./Header/Header";
import Results from "./Results/Results";
import Steps from "./Steps/Steps";
import AboutUs from "./AboutUs/AboutUs";
import Carousel from "./Carousel/Carousel"

function Home() {
    return (
        <>
            <Header />
            <Results />
            <Steps />
            <AboutUs />
            <Carousel />
        </>
    )
}

export default Home
