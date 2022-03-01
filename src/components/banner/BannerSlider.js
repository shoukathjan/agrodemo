import React, {useState} from "react";
import "../css/style.css";
import { Carousel } from "bootstrap";

const BannerSlider = ({ items }) => {
    const [current, setCurrent] = useState(0);

  const renderedItems = items.map((item , index) => {
    {
      /* <!-- Wrapper for slides --> */
    
    return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
		{/* <!-- Wrapper for slides --> */}
		<div className="carousel-inner">
			<div className="carousel-item active">
	
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className={item.cname} key= {index}>
        <div className="banner-agile-text text-white offset-xl-7 offset-sm-6 offset-5">
          <h4 className="text-uppercase">{item.heading1}</h4>
          <h3 className="pb-md-4 pb-3 mb-md-5 mb-3">{item.heading2}</h3>
          <p>{item.heading3}</p>
          {/* banner social icon */}
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
		</div>
          {/* <!-- //banner social icons --> */}
        </div>
        </div >
      </div>
	  </div>
	</div>
	
	)}
});

  return (
	<div>
		{renderedItems}				
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
	//banner slider
	//banner
  );
};

export default BannerSlider;