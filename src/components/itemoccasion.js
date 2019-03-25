import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    
    import './App.css'


    const Itemoccasion = ({item}) => {
    
        return ( 
    
        <div className='contact-item-container'>
                           
     <Card>
     <br/><br/><br/>
        <CardImg src={item.image} width="100%" height ="350px" /> 
        <CardBody>
          <br/>
          <CardTitle><center><h2>{item.occasion}</h2></center></CardTitle>
       
      
             
              <br/><br/><br/><br/>
              
        </CardBody>
      </Card>
         
    </div>
      
      
      );
    }




export default Itemoccasion;
























