import React from 'react';

const DropDown = () => {
    return ( 
    <div className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
						    aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item scroll" href="#news">Our News</a>
							<a className="dropdown-item scroll" href="#testi">Testimonials</a>
							<a className="dropdown-item scroll" href="#works">Our Works</a>
							<a className="dropdown-item" href="single.html">Some More</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="404.html">404 Error Page</a>
						</div>
    </div>

     );
}

export default DropDown;