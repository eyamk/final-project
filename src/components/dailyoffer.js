

import Itemoccasion from './itemoccasion';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';

import Dailyitem from './dailyitem'
import './App.css'


const tab=[
    {im: 'images/promo30.png',off:"We offer a reduction of 30% for all salty food in all our restaurants from 15h to 16h", offer:"HAPPY HOUR OFFER"},
    {im: 'images/promo20.jpg',off:"We offer a reduction of 20% for all orders for more than 5 people in all our restaurants", offer:"FIVE STAR OFFER"},
    {im: 'images/promo40.png',off:"We offer a reduction of 40%  for all orders for more than 10 people in all our restaurants", offer:"GOLDEN OFFER"},
    {im: 'images/promo50.png',off:"We offer a reduction of 50% for your child order (6 years old) in all our restaurants", offer:"ANGEL OFFER"},

];

const Dailyoffer= ({item}) => {

    
        return (  <div>
            
      <div className="section-title">
      <h2>iFood Daily offers</h2>
      <br/><br/>

    </div>
    <center> <h3> Our daily offers concern all our partners </h3>
   <h3> You dont need any reservation for these offers  </h3><br/><br/></center>



<section className="student-reviews">
  <div className="container">
   
     <div className="reviews-slider"> 
          
     
            {tab.map((el,index)=><Dailyitem item={el} key={index}/>)}
           
     </div> 

</div>
</section>       


<div className="section-title">
            <h2>Waiting for your coming!  </h2>
            <br/>

            <center> <h3> Serving you is our pleasure </h3></center>
            <br/><br/>            <br/><br/>

          </div>





</div>);
        }


export default Dailyoffer;


