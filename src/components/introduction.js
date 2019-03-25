import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container, Row, Col } from 'react-grid-system';
    import Seemore from './seemore'
    
    import './App.css'

class Introduction  extends Component {
  
  render() { 
    return (  <div>
       <Container>  

      <div className='contact-item-container'>
           <center> 
     
        <div className="section-title" id="">
        <br/><br/>   <h2>Welcome</h2><br/><br/>
        </div>
   
          
         
             
          <h3>No matter the occasion, plan your event with Unique Venues, and get ready to raise a glass to a luxury  
                  look and  a successful celebration!

                </h3>     
             
             </center>   
          
             </div>   
             </Container>          
             </div>
           
           
      );
    } 
}


 

export default Introduction;





