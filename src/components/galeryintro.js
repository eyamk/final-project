import React, { Component } from 'react';

class Galeryintro  extends Component {
  
  render() { 
    return (  
      
              <div>
        


<div className="discover">
       
        <div className="discover_slider_container">
          <div className="owl-carousel owl-theme discover_slider">
  
            <div className="slide">
              <div className="background_image" style={{backgroundImage: 'url(images/wedding.png)'}} />
              <div className="discover_overlay d-flex flex-column align-items-center justify-content-center">
                <h1><a href="#">Weddings</a></h1>
              </div>
            </div>
       
            <div className="slide">
              <div className="background_image" style={{backgroundImage: 'url(images/anniv.jpg)'}} />
              <div className="discover_overlay d-flex flex-column align-items-center justify-content-center">
                <h1><a href="#">Anniversary</a></h1>
              </div>
            </div>
       
            <div className="slide">
              <div className="background_image" style={{backgroundImage: 'url(images/gg.png)'}} />
              <div className="discover_overlay d-flex flex-column align-items-center justify-content-center">
                <h1><a href="#">Event Company</a></h1>
              </div>
            </div>
          </div>
        </div>
      </div>

                    </div>
                  );
                }
              };




export default Galeryintro;