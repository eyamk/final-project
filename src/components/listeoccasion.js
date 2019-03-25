
import Itemoccasion from './itemoccasion';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';


import './App.css'


const tab=[
    {image: 'images/wedding.png',occasion:"Weddings"},
    {image:'images/anniv.jpg',occasion:"Anniversary"},
    {image:'images/gg.png',occasion:"Event Company"},
];

const Listoccasion = ({item}) => {

        return ( 
        <div className='contact-list-container'>
    
        <div className='contact-list-container1'>
        
            <Container>
                <Row>
                    
     
            {tab.map((el,index)=><Col sm={4}><Itemoccasion item={el} key={index}/></Col>)}
            </Row>
            </Container>
        
     
        </div>

        </div>);
    }






export default Listoccasion ;
