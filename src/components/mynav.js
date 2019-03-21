import React, { Component } from 'react'

class Navbar extends Component {
    
    render() { 
        
        return ( 

<div className="quck-nav">
        <div className="container">
          <div className="contact-no"><a href="#"><i className="fa fa-map-marker" />Brooklyn, NY 10036, United States</a></div>
          <div className="contact-no"><a href="#"><i className="fa fa-phone" />+299 97 39 82</a></div>
          <div className="contact-no"><a href="#"><i className="fa fa-globe" />ifood.com</a></div>
          <div className="quck-right">
     {/*        <div className="right-link"><a href="#"><i className="fa fa-handshake-o" />Help Center</a></div>
            <div className="right-link"><a href="#"><i className="fa fa-headphones" />Online Support</a></div>
            <div className="right-link language-select">
              <a href="javascript:void(0);"><i className="fa fa-language" />English</a> 
               <ul className="language-list">
                <li><a href="#">Guyana</a></li>
                <li><a href="#">Haiti</a></li>
                <li><a href="#">Honduras</a></li>
                <li><a href="#">Andorra</a></li>
                <li><a href="#">Armenia</a></li>
                <li><a href="#">Bahrain</a></li>
              </ul>
            </div> */}
            <div className="right-link"><a href="login-register.html"><i className="fa  fa-user" />Login \ Register</a></div>
          </div>
        </div>
      </div>

         );
    }
}

export default Navbar;