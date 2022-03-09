import React from 'react';
import { Works } from '../bestworks/Works';
import Blogs from '../blogs/Blogs';
import "../css/style.css";
import Testimonals from '../testimonals/Testimonals';

 const AboutUs = () =>  {
  return (
    <div><div className="banner2-w3ls">

	</div>

	<div className="breadcrumb-agile">
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<a href="index.html">Home</a>
				</li>
				<li className="breadcrumb-item active" aria-current="page">About Us</li>
			</ol>
		</nav>
	</div>
	

	
	<div className="about-page py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-xl-5 mb-4 text-dark">
				<span className="text-uppercase">few words</span>About Us</h3>
			<div className="abt-img">
				<h3 className="sub-w3ls-headf text-white text-right pr-4">A few words about our Agro Crop</h3>
			</div>
			<div className="d-flex abtf-info mt-5">
				<div className="about-grids px-4">
					<h5 className="about-w3ls-page font-weight-bold text-dark pb-3">Our Approach</h5>
					<p className="paragraphf">euismod cursus tortor. Etiam vulputate enim id est suscipit tincidunt. In lectus lectus, euismod eu lacus non, blandit
						imperdiet nulla. </p>
					<p className="paragraphf mt-3">In lectus lectus, euismod eu lacus non, blandit imperdiet nulla. </p>
				</div>
				<div className="about-grids px-4 py-4 my-lg-0 my-4">
					<h5 className="about-w3ls-page font-weight-bold text-dark pb-3">Our History</h5>
					<p className="paragraphf">
						<i className="fas fa-long-arrow-alt-right"></i> 30+ Years of experience</p>
					<p className="paragraphf my-2">
						<i className="fas fa-long-arrow-alt-right"></i> euismod cursus tortor</p>
					<p className="paragraphf">
						<i className="fas fa-long-arrow-alt-right"></i> Aenean ipsum elit</p>
					<p className="paragraphf my-2">
						<i className="fas fa-long-arrow-alt-right"></i> Aenean elentum lectus</p>
					<p className="paragraphf">
						<i className="fas fa-long-arrow-alt-right"></i> Aenean ipsum elit</p>
				</div>
				<div className="about-grids px-4">
					<h5 className="about-w3ls-page font-weight-bold text-dark pb-3">Our Success</h5>
					<p className="paragraphf">Curabitur posuere enim nec ante varius volutpat. Aenean ipsum elit, ultrices mollis purus quis, aliquet faucibus ex.
						Aenean vel elementum lectus, sit amet euismod id est suscipit tincidunt.</p>
				</div>
			</div>
		</div>
	</div>
	
	<section className="middle-w3ls py-5 text-center">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-xl-5 mb-4 text-white">Agro Crop</h3>
			<p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
			<img src="images/screens2.png" alt="" className="img-fluid" />
		</div>
	</section>

	<div className="team py-5">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="tittle mb-xl-5 mb-4 text-dark">
				<span className="text-uppercase">our</span>Team</h3>
			<div className="row team-agileinfo agileits-w3layouts">
				<div className="col-md-6 team-grid w3-agileits">
					<div className="row">
						<div className="col-8 team-grid-left text-right mt-xl-3">
							<h4>Angela Lea</h4>
							<p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
						</div>
						<div className="col-4 team-grid-right">
							<img src="images/t1.jpg" alt=" " className="img-fluid" />
						</div>
					</div>
				</div>
				<div className="col-md-6 team-grid w3-agileits mt-md-0 mt-4">
					<div className="row">
						<div className="col-4 team-grid-right">
							<img src="images/t3.jpg" alt=" " className="img-fluid" />
						</div>
						<div className="col-8 team-grid-left text-left mt-xl-3">
							<h4>Irene Jan</h4>
							<p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row team-agileinfo agileits-w3layouts mt-lg-5 mt-4">
				<div className="col-md-6 team-grid w3-agileits">
					<div className="row">
						<div className="col-4 team-grid-right">
							<img src="images/t2.jpg" alt=" " className="img-fluid" />
						</div>
						<div className="col-8 team-grid-left text-left mt-xl-3">
							<h4>Nathan Tim</h4>
							<p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 team-grid w3-agileits mt-md-0 mt-4">
					<div className="row">
						<div className="col-8 team-grid-left text-right mt-xl-3">
							<h4>Keith Ryan</h4>
							<p>Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</p>
						</div>
						<div className="col-4 team-grid-right">
							<img src="images/t4.jpg" alt=" " className="img-fluid" />
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
	<Blogs/>
	<Testimonals/>
	<Works/>
	</div>
  )
}
export default AboutUs;