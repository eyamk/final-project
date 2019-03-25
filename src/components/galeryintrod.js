import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container, Row, Col } from 'react-grid-system';
    import Seemore from './seemore'
    
    import './App.css'

class  Galeryintro extends Component {
  
  render() { 
    return (  <div>
       <Container>  

      <div className='contact-item-container'>
           <center> 
     
        <div className="section-title" id="">
        <br/><br/>   <h2>OUR EXPERIENCE</h2><br/><br/>
        </div>
   
          
         
        <h3>Our success is fueled by our partners  </h3>  <br/>
          <h4>Thanks to a 5 year partnership , we achieved sevreal and variant events.<br/> Your satisfaction bring hapiness to our team and encourage us to work more and more in order to share with you the most marvellous moment of your life
          </h4>      
             
             </center>   
          
             </div>   
             </Container>          
             </div>
           
           
      );
    } 
}



export default Galeryintro;