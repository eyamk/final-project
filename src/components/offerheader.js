import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './App.css'

class Offerheader extends Component {
    
    render() { 
        
        return ( 

<div>
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
                  <li className="sub-menu">
                    <Link to='./'> <span>Home</span><span className="arrow"><i className="fa fa-plus" /></span></Link>

                    
                  </li>
                  
                  
                  
                
                  <li className="active sub-menu">
                    <a href="event">Offers</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>

                      {/* ibtihel */}


                      <li><Link to='/event'> <span>iFood One Day Event offers </span></Link></li>
                      <li><Link to='/event'> <span>iFood Daily offers</span></Link></li>

                      {/* <li><a href="event.html">Event</a></li> */}
                      {/* <li><a href="event-details.html">Event Details</a></li>
                      <li><a href="event-details2.html">Event Details2</a></li> */}
                    </ul>
                  </li>

                  <li className="sub-menu">
                    <a href="event">Events</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>

                      {/* ibtihel */}

                      
                      
                      
                      <li><Link to='/event'> <span>Indoor/Outdoor</span></Link></li>
                      <li><Link to='/event'> <span>I-Food menu special event</span></Link></li>
                      <li><Link to='/event'> <span>Gallery</span></Link></li>

                      {/* <li><a href="event.html">Event</a></li> */}
                      {/* <li><a href="event-details.html">Event Details</a></li>
                      <li><a href="event-details2.html">Event Details2</a></li> */}
                    </ul>
                  </li>
                  <li className="sub-menu mega-menu">
                    
                    
                  </li>
                  <li><Link to='/contact'>Contact Us </Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
</div>
</div>
          );
        }
    }
    
    export default Offerheader;