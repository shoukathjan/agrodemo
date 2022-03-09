import React from 'react';
import { Link } from 'react-router-dom';

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
							<Link className="dropdown-item" to='/somemore'>
							Some More 
    						</Link>
							
							<div className="dropdown-divider"></div>
							<Link className="dropdown-item" to='/error404'>
							404 Error Page 
    						</Link>
						</div>
    </div>

     );
}

export default DropDown;