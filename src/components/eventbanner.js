import React, { Component } from 'react'

import './App.css'

class Eventbanner extends Component {
    
    render() { 
        
        return ( <div>
          <section className="banner inner-page">
          <div className="banner-img"><img src="images/int.jpg" alt /></div>
          <div className="page-title">	
            <div className="container">
              <h1>iFood Events</h1>
            </div>
          </div>
        </section>
         <section className="breadcrumb ">
         <div className="container">
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">event</a></li>
           </ul>
         </div>
       </section>

       </div>   

    );
    }
}

export default Eventbanner;