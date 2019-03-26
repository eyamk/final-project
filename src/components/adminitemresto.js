import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container , Row, Col} from 'react-grid-system';
    import './App.css';
    import {Link} from 'react-router-dom'


class Adminitemresto extends Component {
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
              <p>{item.name} </p>
            </div> 
    </Col>
    <Col sm={2}>
    <div className="input-box">
              <p>{item.image}</p>

            </div> 
    </Col>
    <Col sm={2}>
    <div className="input-box">
              <p>{item.lieu}</p>

            </div> 
   </Col>
   <Col sm={2}>
   <div className="input-box">
              <p>{item.link}</p>

            </div> 
           
    </Col> 
    <Col sm={2}>
    <div className="input-box">
              <p>{item.paragraphe}</p>

            </div> 
         
    </Col>  
    <Col sm={2}>
    <div className="input-box">
              <p>{item._id}</p>
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


 
export default Adminitemresto;




