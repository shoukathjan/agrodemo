import React from 'react';
import "../css/style.css";
import "../css/flexslider.css";


const Blogs = () => {
  return (
    // blogs
	<div className="blogs py-5">
		<div className="container py-xl-5 py-lg-3">
			<div className="blogs-main offset-lg-2">
				<h3 className="tittle mb-xl-5 mb-4 text-dark">
					<span className="text-uppercase text-white">new</span>Blog
				</h3>
				<section className="slider">
					<div className="flexslider">
						<ul className="slides">
							<li>
								<div className="inner-blogs-w3ls">
									<img src="./images/n1.jpg" alt=" " className="img-fluid" />
									<div className="blogs-info-wthree text-center">
										<p>Sed ut perspiciatis</p>
										<h5 className="para-w3-agileits text-dark mt-3 mb-5">Luis aute irure dolor in com modo consequat.</h5>
										<a href="single.html" className="button-w3ls">Read More</a>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="inner-blogs-w3ls">
									<img src="./images/n3.jpg" alt=" " className="img-fluid" />
									<div className="blogs-info-wthree text-center">
										<p>Sed ut perspiciatis</p>
										<h5 className="para-w3-agileits text-dark mt-3 mb-5">Luis aute irure dolor in com modo consequat.</h5>
										<a href="single.html" className="button-w3ls">Read More</a>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="inner-blogs-w3ls">
									<img src="./images/n2.jpg" alt=" " className="img-fluid" />
									<div className="blogs-info-wthree text-center">
										<p>Sed ut perspiciatis</p>
										<h5 className="para-w3-agileits text-dark mt-3 mb-5">Luis aute irure dolor in com modo consequat.</h5>
										<a href="single.html" className="button-w3ls">Read More</a>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
		{/* <!-- blog social icons --> */}
		<div className="backeffect-social">
			<p className="text-white mb-2">Share</p>
			<ul className="list-unstyled text-center py-sm-5 py-4 px-lg-4 px-3">
				<li>
					<a href="#" className="rounded-circle">
						<i className="fab fa-facebook-f active"></i>
					</a>
				</li>
				<li className="my-sm-5 my-4">
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
		
	</div>
	//blogs
  )
}
export default Blogs;
