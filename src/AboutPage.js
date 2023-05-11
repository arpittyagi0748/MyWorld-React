import React from 'react';
import image from './images/truck-gfcca7b761_1920.jpg';
import NavBar from './NavBar';
import image2 from './images/highway-g08ad1d51c_1920.jpg';
import Footer from './Footer'

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="about-secondary-div">
        <img src={image} className="nav-image" />
        <h2 className='about-heading text-3xl'>
          Share
          We believe in an integrated world. <br />One planet. <br />Connected all the way.</h2>
      </div>
      <div className='logistics-main grid-2'>
        <div>
          <h1>Integrating the world with integrated logistics</h1>
          <p className='single-form'>
            Global logistics underpins development and growth. An endless choreography
            of goods and services, it supports our economies, our partnerships, our ways
            of life. But when the connections become weak, so does our ability to grow,
            and thrive, together.
            <br />
            At MyWorld, our vision is to transform the flow of the foods, goods, data and
            materials that sustain people, businesses and economies the world over. To
            enable the exchange of ideas, culture and trust for a truly integrated world
            where value is created for everyone
          </p>
        </div>
        <div style={{width:"100%",height:"20rem"}}>
          <img src={image2} className="nav-image"/>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default AboutPage