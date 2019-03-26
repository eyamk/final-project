

import Itemoccasion from './itemoccasion';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';
import './App.css'
  
class Discover  extends Component {
    
  render() { 
      
      return (  <div >
        <center>
  
     <div className="section-title" id="in-out" >
     <br/><br/>  <h2>InDoor/OutDoor  Venue</h2><br/><br/></div></center>
     
        <div className='contact-list-container'>
    
        <div className='contact-list-container1'>
        
            <Container>
                <center>
       
        <br/>
        <h3>Thanks to our partners we provide  a double-story, indoor and outdoor venue  with a  very classy, impressive and chic atmosphere,
        and with panoramic view
        </h3>
         </center>          
     
    
            </Container>
        <br/><br/>    <br/>

</div>     </div>
        </div>);
        }

      }

export default Discover;