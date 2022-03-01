import React from 'react';

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
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li className="mx-xl-3 mx-lg-2 mx-3">
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li className="ml-xl-3 ml-lg-2 ml-3">
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
            {/* <!-- //navigation --> */}
        </div>
        {/* <!-- footer end --> */}
        <div className="d-flex footer-end">
            {/* <!-- footer social icons --> */}
            <div className="col-lg-3 footer-social">
                <ul className="list-unstyled text-center">
                    <li className="text-white mr-3">Share</li>
                    <li>
                        <a href="#" className="rounded-circle active">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#" className="rounded-circle">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rounded-circle">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <!-- //footer social icons --> */}
            {/* <!-- newsletter --> */}
            <div className="col-lg-4 subscribe wthree-sub py-4">
                <form action="#" method="post">
                    <input type="email" name="email" placeholder="Enter your Email..." required=""/>
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
            {/* <!-- //newsletter --> */}
            {/* <!-- copyright --> */}
            <div className="col-lg-5 copy-right text-center">
                <p> &copy; 2018 Agro Crop. All Rights Reserved | Design by
                    <a href="http://w3layouts.com/"> W3layouts</a>
                </p>
            </div>
            {/* <!-- //copyright --> */}
        </div>
        {/* <!-- //footer end --> */}
    </div>
</footer>
     );
}

export default Footer;