import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ContactUs extends Component {
    render() {
      return (
        <div>

<section className="banner inner-page">
        <div className="banner-img" style={{backgroundImage: 'url("images/banner/contact-us.jpg")'}}><img src="images/banner/contact-us.jpg" alt style={{display: 'none'}} /></div>
        <div className="page-title">	
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link to='/'>Home</Link></li>
            
          </ul>
        </div>
      </section>
      
      <section className="contact-message">
        <div className="container">
          <div className="section-title">
            <h2>SENT A MESSAGE</h2>
          </div>
          <div className="form-filde">
            <form action="thank-you.html" method="post" className="has-validation-callback">
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-box">
                    <input type="text" placeholder="Name" data-validation="required" name="name" />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Email" data-validation="required" name="email" />
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Subject" data-validation="required" name="subject" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-box">
                    <textarea placeholder="Message" data-validation="required" name="message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="submit-box">
                    <input type="submit" defaultValue="SEND" className="btn" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

</div>
        );
    }
    }
            export default ContactUs;