import React, { Component } from 'react'

class Footer extends Component {
    
    render() { 
        
        return (


<footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <h5>Daily offers </h5>
                <div className="course-slide">
                  <div className="img"><img src="images/promo20.jpg" alt /></div>
                  <p><a href="courses-list-sideBar.html">FIVE STAR OFFER </a></p>
                  <div className="price">$505</div>
                </div>
                <div className="course-slide">
                  <div className="img"><img src="images/promo30.png" alt /></div>
                  <p><a href="courses-list.html">APPY HOUR OFFER </a></p>
                  <div className="price">$55</div>
                </div>
                
                <div className="course-slide">
                  <div className="img"><img src="images/promo40.png" alt /></div>
                  <p><a href="courses-list.html">GOLDEN OFFER </a></p>
                  <div className="price">$178</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-md-offset-1 col-sm-6 col-md-5 col-xs-6">
                    <h5>Company</h5>
                    <ul className="footer-link">
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Partners</a></li>
                      <li><a href="#">Event</a></li>
                      
                    </ul>	
                  </div>
                  <div className="col-md-offset-1 col-sm-6 col-md-5 col-xs-6">
                    <h5>Links</h5>
                    <ul className="footer-link">
                      <li><a href="courses-list.html">Indoor/Outdoor</a></li>
                      <li><a href="price-plan.html">special menu</a></li>
                      <li><a href="instructors.html">Gallery</a></li>
                  
                    </ul>	
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <h5>Contact Us</h5>
                <div className="contact-view">
                  <div className="contact-slide">
                    
                  </div>
                  <div className="contact-slide">
                    <p><i className="fa fa-phone" />+216 53 27 25 14</p>
                  </div>
                  <div className="contact-slide">
                    <p><i className="fa fa-fax" />(73) 527 462</p>
                  </div>
                  <div className="contact-slide">
                    <p><i className="fa fa-envelope" /><a href="mailTo:academy@info.com">ifood@info.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="copy-right">
                <p>Copyright © <span className="year">2017</span>ifood.</p>
                <ul className="footer-link">
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 ">	
              <div className="social-media">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-skype" /></a></li>
                  <li><a href="#"><i className="fa fa-youtube" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="top-arrow" id="goTop" style={{display: 'block'}}>
        <div className="arrow"><i className="fa fa-angle-up" /></div>
      </div>


      
      </footer>

      
    );
}
}

export default Footer;
