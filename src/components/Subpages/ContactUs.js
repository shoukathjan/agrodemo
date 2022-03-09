import React, { useRef } from 'react';
import "../css/style.css";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    

      emailjs.sendForm('service_a9d1r9d', 'template_sctt0g5', e.target, 'YZJoO8TY05su3MRTa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
      <div>
   <div className="banner2-w3ls">
<div className="breadcrumb-agile">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
        </ol>
    </nav>
</div>
</div>



<div className="contact py-5">
    <div className="container py-xl-5 py-lg-3">
        <h3 className="tittle mb-xl-5 mb-4 text-dark text-center">
            <span className="text-uppercase">get in touch</span>Contact Us</h3>
        <div className="row contact_wthreerow agileits-w3layouts pt-4">
            <div className="col-md-7 w3l_contact_form">
                <h4 className="font-italic mb-4">Contact Form</h4>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="form-group">
                        <input type="text" name="from_name" className="form-control" placeholder="Name" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="from_email" className="form-control" placeholder="Email" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="number" className="form-control" placeholder="Phone Number" required=""/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" className="form-control" placeholder="Message.."></textarea>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="col-md-5 agileits_w3layouts_contact_gridl mt-md-0 mt-4">
                <div className="agileits_mail_grid_right_grid">
                    <h4 className="font-italic mb-4">About Us</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.</p>
                </div>
                <div className="agileits_mail_grid_right_grid mt-md-5 mt-4">
                    <h4 className="font-italic mb-4">Contact Info</h4>
                    <ul className="contact_info list-unstyled">
                        <li>
                            <i className="fas fa-location-arrow mr-3"></i>1234k Avenue, 4th block, Ukraine.</li>
                        <li className="my-3">
                            <i className="fas fa-envelope-open mr-3"></i>
                            <a href="mailto:info@example.com">info@example.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone mr-3"></i>+1234 567 567</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  {/* map */}
{/* <div className="w3ls_map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48306.05339877067!2d-74.245183970742!3d40.825144655510556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2555646a723a1%3A0x449f3366d017b214!2sMontclair%2C+NJ%2C+USA!5e0!3m2!1sen!2sin!4v1465991700675"
        style="border:0"></iframe> */}
{/* </div> */}
</div>
  )
}
export default ContactUs;