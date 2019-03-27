import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import RestaurantItemAdmin from './restaurant-item-admin'
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios'



class RestaurantListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount=()=>{
        axios.get('/get-contact').then((res)=>this.props.updateContactReducer(res.data))
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
        <center><button className="btn">retour</button></center>
        </Link>
        </div> );
    }
}

const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
}
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        updateContactReducer:restaurants=>
        {
            dispatch({
                type:'UPDATE_RESTAURANT',
                restaurants
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantListAdmin );