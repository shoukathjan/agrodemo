import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import DropDown from './DropDown';
import Home from './Home';
import Projects from './Projects';


const NavBar = () => {
    return (
        <div>
            <header>
{/* navigation */}
		<nav className="navbar navbar-expand-lg navbar-light px-sm-5 px-3 py-0">
			<h1>
				<a className="navbar-brand py-2" href="index.html">Agro Crop</a>
			</h1>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
			    aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto ml-xl-5 ml-lg-3 px-xl-5 px-lg-4 py-4 text-center">
					<Home/>
					<AboutUs/>
					<DropDown/>
					<Projects/>
					<ContactUs/>
				</ul>
				<div className="header-contact-w3ls text-center mt-lg-0 mt-4">
					<a href="contact.html" className="py-sm-4 py-3 px-4">
						<i className="fas fa-at mr-2"></i>Contact Us</a>
				</div>
			</div>
		</nav>
		{/* <!-- //navigation --> */}
	</header>
        </div>
    );
}

export default NavBar;
