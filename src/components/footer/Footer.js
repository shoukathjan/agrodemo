import React from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    fab,
    faFacebookF,
    faGooglePlusG,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

import AboutUs from "../header/AboutUs";
import ContactUs from "../header/ContactUs";
import DropDown from "../header//DropDown";
import Home from "../header/Home";
import Projects from "../header/Projects";



const Footer = () => {
  return (
    <footer>
      <div className="padding-w3ls-footer pt-sm-5">
        <div className="d-flex footer-ones">
          {/* <!-- logo --> */}
          <div className="col-lg-3 col-sm-4 logo2 text-sm-left text-center mb-sm-0 mb-3">
            <h2>
              <a href="index.html">Agro Crop</a>
            </h2>
          </div>
          {/* <!-- //logo --> */}
          {/* <!-- navigation --> */}
          <div className="col-lg-4 col-sm-8 ftr-menu py-xl-4 py-3 text-center">
            <ul>
              <li className="ml-xl-3 ml-lg-2 ml-3">
                <Home />
              </li>
              <li>
                <AboutUs />
              </li>
              <li className="ml-xl-3 ml-lg-2 ml-3">
                <DropDown />
              </li>
              <li>
                <Projects />
                </li>
                <li >
                <ContactUs />
              </li>
            </ul>
          </div>
        
        </div>
      
        <div className="d-flex footer-end">
        
          <div className="col-lg-3 footer-social">
            <ul className="list-unstyled text-center">
              <li className="text-white mr-3">Share</li>
              <li>
                <a href="#" className="rounded-circle active">
                <FontAwesomeIcon icon="fab faFacebookF" />
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="rounded-circle">
                   <FontAwesomeIcon icon="fab faGooglePlusG" />
                </a>
              </li>
              <li>
                <a href="#" className="rounded-circle">
                <FontAwesomeIcon icon="fab faGooglePlusG" /> 
                  <i className="fab faTwitter"></i>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 subscribe wthree-sub py-4">
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email..."
                required=""
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          
          <div className="col-lg-5 copy-right text-center">
            <p>
              {" "}
              &copy; 2018 Agro Crop. All Rights Reserved | Design by
              <a href="http://w3layouts.com/"> W3layouts</a>
            </p>
          </div>
         
        </div>
 
      </div>
    </footer>
  );
};

export default Footer;
