import React, { Component } from 'react'

import './App.css'

class Offerbanner extends Component {
    
    render() { 
        
        return ( <div>
          <section className="banner inner-page">
          <div className="banner-img" id ="imagepromo"><img src="images/promo.jpg"   alt /></div>
          <div className="page-title">	
            <div className="container">
              <h1>iFood Offers</h1>
            </div>
          </div>
        </section>
         <section className="breadcrumb ">
         <div className="container">
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">Offers</a></li>
           </ul>
         </div>
       </section>


       
    </div>

    );
    }
}

export default Offerbanner;