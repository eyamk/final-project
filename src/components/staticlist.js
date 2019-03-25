import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container, Row, Col } from 'react-grid-system';
    import Seemore from './seemore'
    
    import './App.css'



class Staticlist extends Component {
    
  

    render() { 
        
        return ( 
    <div>
        <div className='contact-item-container'>
           
        <Container>
        <div className="section-title">
        <br/><br/>
            <h2>Best Restaurants in tunisia</h2><br/><br/>
          </div>
         <Row> 
         <Col sm={3}>                 
     <Card>
        <CardImg src= "https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg"width="100%" /> 
        <CardBody>
          <CardTitle><center><h2>l'astragale</h2></center></CardTitle>
          <CardSubtitle><h4><center>Tunis</center></h4></CardSubtitle>
          
          <center>
              <a href="https://www.restaurant-lastragale.com" ><Button>See restaurant</Button></a></center>   
        </CardBody>
      </Card>
      </Col>
      <Col sm={3}>                 
     <Card>
        <CardImg src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF"width="100%" /> 
        <CardBody>
          <CardTitle><center><h2>Le pirate</h2></center></CardTitle>
          <CardSubtitle><h4><center>monastir</center></h4></CardSubtitle> 
          <center>
              <a href="http://www.lepiratemonastir.com" ><Button>See restaurant</Button></a></center>   
        </CardBody>
      </Card>
      </Col>
      <Col sm={3}>                 
     <Card>
        <CardImg src= "http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg"width="100%" /> 
        <CardBody>
          <CardTitle><center><h2>Miams</h2></center></CardTitle>
          <CardSubtitle><h4><center>Sousse</center></h4></CardSubtitle>
          
          <center>
              <a href="http://www.lepiratemonastir.com" ><Button>See restaurant</Button></a></center>   
        </CardBody>
      </Card>
      </Col>
      <Col sm={3}>                 
     <Card>
        <CardImg src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF"width="100%" /> 
        <CardBody>
          <CardTitle><center><h2>Le pirate</h2></center></CardTitle>
          <CardSubtitle><h4><center>monastir</center></h4></CardSubtitle> 
          <center>
              <a href="http://www.lepiratemonastir.com" ><Button>See restaurant</Button></a></center>   
        </CardBody>
      </Card>
      </Col>
      </Row> 
      </Container>
     


    </div>
    <Seemore/>
    </div>
      
      );
    }
}


 
export default Staticlist;