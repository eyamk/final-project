import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container , Row, Col} from 'react-grid-system';
    import './App.css';
    import {Link} from 'react-router-dom'


class Admin extends Component {
    
  render() { 
      
      return (  <div>


<div className ="adminbar">
   <Container>
   <Row>
   
      <Col sm={11}> <h3>Platform Admin</h3></Col>

    <Col sm={1}><img src ="images/adminn.png" className ="adminimage"/></Col>
</Row></Container>
</div>    




            <div className="section-title" id="listrest">
            <Link to='/admin/adminresto'>  <br/><h2>Restaurants List</h2></Link>
        </div>
        <br/><br/><br/>









        <div className="section-title" id="listrest">
        <Link to='/admin/adminoffer'>  <br/><h2>Offers List</h2></Link>

        </div>
        <br/><br/><br/>
        
<div className="section-title" id="listrest">
<Link to='./'>  <br/><h2>LOGOUT</h2></Link>
</div>
<br/><br></br>
          
  </div>)}}


 
export default Admin;




