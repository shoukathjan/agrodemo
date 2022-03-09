import React from 'react';
import "../css/style.css";
import SubNews from "./SubNews.js";
//import '../css/owl.carousel.css';
// import '../css/owl.theme.default.css';

const News = () => {
  return (
    	<section className="banner-bottom-w3ls py-5" id="news">
		<div className="py-xl-5 py-lg-3">
			<div className="d-flex">
				<div className="col-lg-4 about-right slider-right-con">
					<h3 className="tittle mb-xl-5 mb-4 text-dark">
						<span className="text-uppercase">Latest</span>News</h3>
					<p>Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer.
					</p>
				</div>
				<SubNews/>
			</div>
		</div>
	</section>
  )
}

export default News;
