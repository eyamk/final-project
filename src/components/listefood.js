

import Itemoccasion from './itemoccasion';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';


import './App.css'


const tab=[
    {image: 'images/s12.jpg',occasion:"Sweety"},
    {image: 'images/m1.jpg',occasion:"Salty"},
    {image: 'images/dr.jpg',occasion:"Drink"},
];

const Listfood= ({item}) => {

    
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


export default Listfood ;


