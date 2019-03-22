import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';



import './App.css'

class Restaurantitembox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
        console.log(this.props.list)
        const {list}=this.props
        return ( 
<div className="col-sm-6 col-md-4">
        <div className="event-box">
          <div className="img"><img src="images/event/img1.jpg" alt /></div>
          <div className="event-name"><a href="#">Contrary to popular belief</a></div>
          <div className="event-info"><i className="fa fa-clock-o" /> September 25, 2015 10:00 am</div>
          <div className="event-info"><i className="fa fa-map-marker" />Chicago, WY82601, US</div>
          <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
          <div className="more-btn">
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>


            );
    }
}
export default Restaurantitembox;