import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container , Row, Col} from 'react-grid-system';
    import './App.css';
    import {Link} from 'react-router-dom'


class Adminitemoffer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  

    render() { 
        const {item}=this.props
        console.log(this.props.contacts)
        return( <div>
   <Container>   
 
  <Row>  
      <br/>
    <Col sm={2}>
            <div className="input-box">
            <input type='text' name='name' value={item.rest} />

              
            </div> 
    </Col>
    <Col sm={2}>
    <div className="input-box">
          
              <input type='text' name='name' value={item.im} />


            </div> 
    </Col>
    <Col sm={2}>
    <div className="input-box">
        
              <input type='text' name='name' value={item.date} />


            </div> 
   </Col>
   <Col sm={2}>
   <div className="input-box">
            
              <input type='text' name='name' value={item.price} />

            </div> 
           
    </Col> 
    <Col sm={2}>
    <div className="input-box">
      
              <input type='text' name='name' value={item.val} />

            </div> 
         
    </Col>  
    <Col sm={2}>
    <div className="input-box">
              {/* <p>{item._id}</p> */}
              <input type='text' name='name' value={item._id} />

            </div> 
         
    </Col>  
    </Row>
   <Row>
    <Col sm={1}>
    <div className="enroll-btn"><br/>	
                <a href="#" className="btn">Edit</a>
              </div>
    </Col>   
    <Col sm={1}>
    <div className="enroll-btn"   className ="del"><br/>	
                <a href="#" className="btn">Delete</a>
              </div>
    </Col>  
    <br/>
    </Row>    
    <br/> <br/> <br/> <br/>
   </Container>   
        </div>


      );
    }
}


 
export default Adminitemoffer;




