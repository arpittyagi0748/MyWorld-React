import React from 'react';
import NavBar from './NavBar';
import image2 from './images/highway-g08ad1d51c_1920.jpg';
import Footer from './Footer';
import { BiMessageDetail } from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai'

const ContactUsPage = () => {
  return (
    <>
      <NavBar />
      <div style={{ margin: "0 7rem", width: "50%", marginTop: "2.5rem" }}>
        <h1>Contact Us</h1>
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
      <div className='grid-2' style={{ textAlign: "center", margin: "3rem 7rem", justifyItems: "center" }}>
        <div><div class="card" style={{ width: "35rem", height: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">Sales Enquiries</h5>
            <BiMessageDetail style={{ fontSize: "2rem" }} />
            <p class="card-text">
              For Sales Enquiries click on the button below
            </p>
            <button type="button" className="btn btn-primary">
              Enquire
            </button>
          </div>
        </div></div>
        <div><div class="card" style={{ width: "35rem", height: "12rem" }}>
          <div class="card-body">
            <h5 class="card-title">E-mail</h5>
            <AiOutlineMail style={{ fontSize: "2rem" }} />
            <p class="card-text">
              Contact us and we will respond within the next two working days.
            </p>
            <button type="button" className="btn btn-primary">
              E-Mail
            </button>
          </div>
        </div></div>
      </div>
      <div className='logistics-main grid-2 single-form' >
        <div style={{ width: "100%", height: "20rem" }}>
          <img src={image2} className="nav-image" />
        </div>
        <div>
          <h1>Rise up to the opportunity</h1>
          <p className='single-form'>
            Working for MyWorld can be a fun, insightful and a rewarding experience. Discover job
            vacancies, find out how to apply to them, and learn more about careers at Maersk.
            <br />
            What’s more, visit our Press Room to find our press contacts, reports and publications.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUsPage