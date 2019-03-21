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
                <a href="index.html" className="navbar-brand" width="70%"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPTW_luVH7iXnntU9BO8LaKDlOglUecrj5nS6JoFX9PCPVgbRDg" width="50%" className="logo" alt /></a>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active sub-menu">
                    <a href='#'>Home </a><span className="arrow"><i className="fa fa-plus" /></span>
                    
                  </li>
                  
                  
                  
                  <li><a href="#about">About Us</a></li>
                  <li className="sub-menu">
                    <a href="event.html">Offers</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>
                      <li><a href="event.html">Event</a></li>
                      <li><a href="event-details.html">Event Details</a></li>
                      <li><a href="event-details2.html">Event Details2</a></li>
                    </ul>
                  </li>
                  <li className="sub-menu mega-menu">
                    <a href="forums.html">Our partners</a><span className="arrow"><i className="fa fa-plus" /></span>
                    
                  </li>
                  <li><a href="contact-us.html">Contact Us </a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <img src="https://wpblink.com/sites/default/files/wallpaper/food/68857/meal-wallpapers-hd-68857-9548098.png" alt /> */}
      </div>



            );
        }
    }
    
    export default Header;