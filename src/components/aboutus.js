import React, { Component } from 'react'

class Aboutus extends Component {
    
    render() { 
        
        return (
<div>
            {/* <div className="section-title" id="about">
            <h2>About us</h2><br/><br/>
          </div> */}
          
         <br/><br/><br/><br/>
      <section className="preparation">
        <div className="container">
          <div className="section-title white">
            <h2>About us</h2>
            <p><b>WHO WE ARE</b></p> <br/>
          </div>
          <div className="preparation-view">
            <div className="item">
              <div className="icon"><img src="images/preparation-icon1.png" alt /></div>
              <div className="course-name">Highest Quality Content by IIM Alumni  <span>CONTENT</span></div>
              <p><h4>The ifood Group is one of the most successful organizations in the Mediterranean. The group is considered one of the largest food manufacturing and distributing companies in the region.  </h4></p>
            </div>
            <div className="item">
               <div className="icon"><img src="" alt /></div>
              <div></div> <br/>
             <br/><br/>  <p><h4>The group was founded back in tunisia in 2018, and introduced the concept of QSR’s (Quick serving Restaurants) in the regional market in 2019. The group with its two divisions operates 40 restaurants across the region , offering the safest, most reliable and best quality food.</h4></p>
            </div>
            <div className="item">
              <div className="icon"><img src="images/preparation-icon1.png" alt /></div>
              <div className="course-name">Highest Quality Content by IIM Alumni  <span>CONTENT</span></div>
              <p></p>
            </div>
            <div className="item">
              <div className="icon"><img src="images/preparation-icon2.png" alt /></div>
              <div className="course-name">Detailed Analysis with Performance Indicators<span>ANALYSIS</span></div>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>
          </div>
        </div>
      </section>

          </div>
            );
        }
    }
    
    export default Aboutus;