import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    
    import './App.css'



class Moreitem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  

    render() { 
        // const {item}=this.props
        const {item}=this.props
        console.log(this.props.list)
        return ( 
    
        <div className='contact-item-container'>
                            
     <Card>
        { <CardImg src={item.image}width="100%" /> }
        <CardBody>
          <CardTitle><center><h2>{item.name}</h2></center></CardTitle>
          <CardSubtitle><h4>place : {item.lieu}</h4></CardSubtitle>
           <CardText><p>{item.paragraphe}</p></CardText> 
          <center>
              <a href={item.link}><Button>See restaurant</Button></a></center>
              
              
        </CardBody>
      </Card>
         
    </div>
      
      
      );
    }
}


 
export default Moreitem;