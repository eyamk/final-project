import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';
import Restaurantitembox from './restaurantitembox'



import './App.css'

class Restaurantlistbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
        console.log(this.props.list)
        const {list}=this.props
        return ( 
        <div>
            <div className='contact-list-container'>
       
        <div className='contact-list-container1'>
        
            <Container>
                <Row>
            {list.map((el,index)=><Col sm={4}><Restaurantitembox item={el} key={index}/></Col>)}
            </Row>
            </Container>    
        </div>

        <div className="pagination">
        <ul>
          <li className="next"><a href="#"><i className="fa fa-angle-left" /><span>Next</span></a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li className="prev"><a href="#"><span>prev</span> <i className="fa fa-angle-right" /></a></li>
        </ul>
      </div>
        </div> 
<br/>

        </div>);
    }
}



const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
}
}
 
export default connect(mapStateToProps)(Restaurantlistbox);