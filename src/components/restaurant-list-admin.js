import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import RestaurantItemAdmin from './restaurant-item-admin'
import { Container, Row, Col } from 'react-grid-system';




class RestaurantListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.list)
        const {list}=this.props
        return ( <div className='contact-list-container'>
        <h2>restaurant List</h2>
        <div className='contact-list-container1'>
        <Row>
        {
            list.map((el,index)=><Col sm={2}><RestaurantItemAdmin item={el} key={index}/></Col>)
        }
          </Row>        
                  
        </div><br/><br/><br/>
        <Link to='/restaurantadmin'>
        <button>retour</button>
        </Link>
        </div> );
    }
}

const mapStateToProps=(state)=>
{  return {
    list:state.restaurantAdminReducer
}
}
 
export default connect(mapStateToProps)(RestaurantListAdmin );