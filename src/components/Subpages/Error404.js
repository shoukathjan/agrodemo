import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
	<div className="error_banner">
		<div className="container-fluid">
			<div className="agileinfo-error">
				<div className="error_grid offset-lg-6 offset-md-5 offset-sm-4 offset-1">
					<h4>Oop's!
						<i className="fas fa-frown ml-3"></i>
					</h4>
					<h5 className="d-flex">404
						<sup className="d-flex align-items-center ml-3">Error Page</sup>
					</h5>
                    <Link className="button-w3ls-2" to='/'>
                    Back Home 
    </Link>
					
				</div>
			</div>
		</div>
	</div>
	</div>
  )
}

export default Error404