import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';



import './App.css'

class Restaurantitembox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}
    render() {
      const {item}=this.props 
    
        return ( 
          <div className="event-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="event-box">
                  <div className="img"><img src={item.image} alt /></div>
                  <div className="event-name"><a href="#">{item.name}</a></div>
                  {/* <div className="event-info"><i className="fa fa-clock-o" /> September 25, 2015 10:00 am</div> */}
                  <div className="event-info"><i className="fa fa-map-marker" />{item.lieu}</div>
                  <p>{item.paragraphe}</p>
                  <div className="more-btn">
                    <a href="#" className="btn">Read More</a>
                  </div>
                </div>
                </div>
            </div></div></div>


            );
    }
}
export default Restaurantitembox;