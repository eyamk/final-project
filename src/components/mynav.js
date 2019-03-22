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
            <div className="right-link"><a href="login-register.html"><i className="fa  fa-user" />Login \ Register</a></div>
          </div>
        </div>
      </div>

         );
    }
}

export default Navbar;