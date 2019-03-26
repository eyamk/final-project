

// import Itemoccasion from './itemoccasion';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 import { Container, Row, Col } from 'react-grid-system';
import './App.css'
  
  
     
 
class Indoor  extends Component {
  
  render() { 
    return (  
      
            
<div> <Container>
              <div className="wapper" >
              <section className="banner style2">
<div>
                    <div className="left-slider">
                      <div className="item">
                        <img src="images/INDO.jpg" alt />    
                      </div>
                      <div className="item">
                        <img src="images/INDOOR.jpg" alt />    
                      </div>
                      <div className="item">
                        <img src="images/IN.jpg" alt />
                      </div>
                      <div className="item">
                        <img src="images/INin.jpg" alt />
                      </div>
                      <div className="item">
                       <img src="images/OU.jpg" alt />    
                       </div>
                     <div className="item">
                        <img src="images/OUTT.jpg" alt />    
                     </div>
                     <div className="item">
                        <img src="images/out.jpg" alt />
                      </div>
                     
                    </div>
                    </div>
                    <div className="info-form">
                      <h2>In Door/ Out Door</h2>
                      <br/>    <br/>  <h4>If you've decided to have an outdoor ceremony, congratulations!
                        <br/><br/><br/>
                        <img src="images/check.png"/>
                     <span>   Daytime / Evening</span>

                        <br/>    <br/>
                        <img src="images/check.png"/>
                     <span>   Hotel / Restaurant Halls</span>

                     <br/>    <br/>
                        <img src="images/check.png"/>
                     <span>   On the beach / By The Lake </span>
                     <br/>    <br/>
                     
                        <img src="images/check.png"/>
                     <span>   In the Garden</span>
                        <br/>     <br/>
                        <img src="images/check.png"/>
                     <span>    Special Menu</span>




                        <br/> 
                        <br/> 
                        <br/> </h4>
                      <div className="row">
                    
         
                        <div className="col-sm-12">
                          <div className="submit-box">
                            <input type="submit" defaultValue="See all the options" />
                          </div>
                        </div>
                        </div>



                   
                    
</div>


              </section>
              </div>
<br/><br/>
<Row><Col sm={7}>
              <h4> We will cater your event celebration in a hotel or restaurant, with prepared food from our partners eatery to serve as a buffet with the best decoration:
               Various candles, chandeliers,  fairy lights, light bulbs, lamps, and paper lanterns are all various choices for an atmospheric lighting. 
Apart from flowers, colour accents will also be brought in with textiles we use for table linen, table runners,Silk and satin napkins witch make a look noble,
bringing exclusivity and luxe into the setting.</h4>    </Col>
<Col sm={5}><center> <h3>     All of them make setting more cosy and warm, encouraging all present to enjoy and relax.</h3>         </center></Col>
<br/><br/>
  
                  </Row>
 
            </Container> <br/><br/><br/><br/></div>
    )}}
    


export default Indoor;