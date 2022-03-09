import React from "react";
import { BrowserRouter, Route , Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="nav-item mx-lg-4 my-lg-0 my-3">
    <Link className="nav-link" to='/aboutus'>
       About Us 
    </Link>
  </div>
  );
};
export default AboutUs;
