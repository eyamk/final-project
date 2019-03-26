import React, { Component } from 'react';

import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container, Row, Col } from 'react-grid-system';
    import Seemore from './seemore'
    
    import './App.css'

class Foodintro extends Component {
  
  render() { 
    return (  <div>
       <Container>  

      <div className='contact-item-container'>
           <center> 
     
        <div className="section-title" id="special-menu">
        <br/><br/>   <h2>I-FOOD MENU SPECIAL EVENT</h2><br/><br/>
        </div>
   
          
         
             
          <h3>No matter the occasion, our menu pair well with the overall tone of the special event you’re hosting:
a casual family reunion, or  elegant wedding catering,  or a corporate event 


                </h3>     
             
             </center>   
          
             </div>   
             </Container>          
             </div>
           
           
      );
    } 
}








export default Foodintro;