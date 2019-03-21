import React, { Component } from 'react'

class Banner extends Component {
    
    render() { 
        
        return ( 
          <section className="banner">
          <div className="banner-img"><img src="https://wpblink.com/sites/default/files/wallpaper/food/68857/meal-wallpapers-hd-68857-9548098.png" alt /></div>
          <div className="banner-text">
            <div className="container">
              <h1>THERE IS NO LOVE MORE SINCERE</h1>
              <p>than the love of food.</p>
              <div className="search-box">	
                <input type="text" placeholder="Search here" />
                <input type="submit" defaultValue />
              </div>
              <div className="learning-btn">
                <a href="#" className="btn">Make a reservation</a>
              </div>
            </div>
          </div>
        </section>
  
          

    );
    }
}

export default Banner;