import React from 'react';
import "../css/style.css";
import  {FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";
import BannerSlider from './BannerSlider';
import { Carousel } from "bootstrap";

// const items = [
//     {
//         heading1: 'Farm',
//         heading2: 'Agro Crop ',
//         heading3: 'Fresh Ideas',
//         cname:  'banner-slider1'
//     },
//     {
//         heading1: 'Fruits',
//         heading2: 'Agro Crop ',
//         heading3: 'Fresh Ideas',
//         cname:  'banner-slider2'
//     },
//     {
//         heading1: 'Healthy',
//         heading2: 'Agro Crop ',
//         heading3: 'Fresh Ideas',
//         cname:  'banner-slider3'
//     }]

const Banner = () => {
    return (<div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
		{/* <!-- Wrapper for slides --> */}
		<div className="carousel-inner">
			<div className="carousel-item active">
				<div className=" banner-slider1">
					<div className="banner-agile-text text-white offset-xl-7 offset-sm-6 offset-5">
						<h4 className="text-uppercase">Farm</h4>
						<h3 className="pb-md-4 pb-3 mb-md-5 mb-3">Agro Crop</h3>
						<p>Fresh Ideas</p>
						{/* <!-- banner social icons --> */}
						<div className="social-agile-banner">
							<ul>
								<li className="para-share-ew3ls mr-3">Share :</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li className="px-sm-2 px-1">
									<a href="#" className="rounded-circle">
										<i className="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="pl-sm-2 pl-1">
									<a href="#" className="rounded-circle">
										<i className="fab fa-dribbble"></i>
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- //banner social icons --> */}
					</div>
				</div>
			</div>
			<div className="carousel-item">
				<div className=" banner-slider2">
					<div className="banner-agile-text text-white offset-xl-7 offset-md-6 offset-sm-5">
						<h4 className="text-uppercase">Fruits</h4>
						<h3 className="pb-4 mb-md-5 mb-3">Agro Crop</h3>
						<p>Fresh Ideas</p>
						{/* <!-- banner social icons --> */}
						<div className="social-agile-banner">
							<ul>
								<li className="para-share-ew3ls mr-3">Share :</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li className="px-2">
									<a href="#" className="rounded-circle">
										<i className="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="pl-2">
									<a href="#" className="rounded-circle">
										<i className="fab fa-dribbble"></i>
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- //banner social icons --> */}
					</div>
				</div>
			</div>
			<div className="carousel-item">
				<div className=" banner-slider3">
					<div className="banner-agile-text text-white offset-xl-7 offset-md-6 offset-sm-5">
						<h4 className="text-uppercase">Healthy</h4>
						<h3 className="pb-4 mb-md-5 mb-3">Agro Crop</h3>
						<p>Fresh Ideas</p>
						{/* <!-- banner social icons --> */}
						<div className="social-agile-banner">
							<ul>
								<li className="para-share-ew3ls mr-3">Share :</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li className="px-2">
									<a href="#" className="rounded-circle">
										<i className="fab fa-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#" className="rounded-circle">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li className="pl-2">
									<a href="#" className="rounded-circle">
										<i className="fab fa-dribbble"></i>
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- //banner social icons --> */}
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Left and right controls --> */}
		<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	</div>
        

      
	</div>
    );
}

export default Banner;