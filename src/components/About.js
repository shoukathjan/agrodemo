import React from 'react';
import Images from "../components/images";
import "./css/style.css";
import "./css/bootstrap.css";
import "./css/flexslider.css";
import "./css/owl.theme.css";




const About = () => {
    return (
        <div className="about py-5">
		<div className="py-xl-5 py-lg-3">
			<div className="d-flex py-xl-5 py-lg-3">
				<div className="col-lg-5 agileits_works-grid">
					<h3 className="tittle mb-xl-5 mb-4 text-dark">
						<span className="text-uppercase">About Us</span>Agro Crop</h3>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
						eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
				</div>
				<div className="col-lg-7 agileits_works-grid1 p-0 text-right mt-lg-0 mt-5">
					<img src={Images.bg} alt="" className="img-fluid first-img" />
					<img src={Images.about} alt="" className="img-fluid img-posi-2" />
				</div>
			</div>
		</div>
	</div>
	// <!-- //banner bottom -->
      );
}

export default About;