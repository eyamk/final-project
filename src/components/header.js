import React, { Component } from 'react'
import './App.css'

class Header extends Component {
    
    render() { 
        
        return ( 

<div>
            <header id="header" className>
        <div className="container">
          <nav id="nav-main">
            <div className="navbar navbar-inverse">
              <div className="navbar-header">
                <a href="index.html" className="navbar-brand" width="70%"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/122017/ifood-logo_0.png?e11qFgwdNpW6Qgyl.hutj9_AXQWNsJWr&itok=b32xbYVp" width="35%" className="logo" alt /></a>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active sub-menu">
                    <a href='#'><b>Home</b> </a><span className="arrow"><i className="fa fa-plus" /></span>
                    
                  </li>
                  
                  
                  
                  <li><a href="#about">About Us</a></li>
                  <li className="sub-menu">
                    <a href="event.html">Event</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>
                      <li><a href="event.html">Event</a></li>
                      <li><a href="event-details.html">Event Details</a></li>
                      <li><a href="event-details2.html">Event Details2</a></li>
                    </ul>
                  </li>
                  <li className="sub-menu mega-menu">
                    <a href="forums.html">Partners with us</a><span className="arrow"><i className="fa fa-plus" /></span>
                    
                  </li>
                  <li><a href="contact-us.html">Contact Us </a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
       
      </div>



            );
        }
    }
    
    export default Header;