import React from "react";
import { BrowserRouter, Route , Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="nav-item mx-lg-4 my-lg-0 my-3">
      <Link className="nav-link" to='/contactus'>
         Contact us   
    </Link>
    </div>
  );
};

export default ContactUs;
