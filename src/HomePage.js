import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Card from './Card';
import Footer from './Footer'

const Home = () => {
    return <>
        <NavBar />
        <Carousel />
        <section>
            <div className='logistics-main'>
                <h3>Logistics Solutions</h3>
                <br />
                <p><b>From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller <br /> We are
                    developing solutions that meet customer needs from one end of the supply chain to the other.</b></p>
                <Card />
                <Footer />
            </div>
        </section>
    </>
}

export default Home;