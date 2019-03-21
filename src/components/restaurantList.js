import React, { Component } from 'react';

import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';

import './App.css'

class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
        console.log(this.props.contacts)
        const {list}=this.props
        return ( <div className='contact-list-container'>
       <div className="section-title" id="about">
            <h2>Best Restaurants in tunisia</h2><br/><br/>
          </div>
        <div className='contact-list-container1'>
        
            <Container>
                <Row>
            {list.map((el,index)=><Col sm={3}><Restaurantitem item={el} key={index}/></Col>)}
            </Row>
            </Container>
        
                  
                  
        </div>
        
        </div> );
    }
}

const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
}
}
 
export default connect(mapStateToProps)(RestaurantList);