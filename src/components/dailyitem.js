import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    
    import './App.css'


    const Dailyitem = ({item}) => {
    
        return ( 
    
            <div className="item">
              <div className="student-box">
                <div className="img"><img src={item.im} alt /></div>
                <h4>{item.off}</h4>
                <br/><br/>
                <center> <br/> <h3>{item.offer}</h3> </center>
              </div>
            </div>
         
  
      
      );
    }




export default Dailyitem;
























