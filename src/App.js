import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './LogoPage'
import AboutPage from './AboutPage'
import ContactUsPage from './ContactUsPage';
import Login from './Login';
import Home from './HomePage';
import Details from './Customerdetails';
import Consignment from './Consignmentdetails';
import ConsignmentImage from './ConsignmentImage';
import Employee from './Employee';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Post from './Post';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-details" element={<Details />} />
        <Route path="/consignment-details" element={<Consignment />} />
        <Route path="/consignment-image" element={<ConsignmentImage />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/post-form" element={<PostForm />} />
        <Route path="/all-post" element={<AllPost />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;