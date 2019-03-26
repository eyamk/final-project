import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import './App.css'


    
class Staticitem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  

    render() { 
        const {item}=this.props

return(
   < div>

<div className='contact-item-container'>
                 
     <Card>
     <CardImg    src= {item.image} width="100%"  /> 
         <CardBody>
          <CardTitle><center><h2>{item.name}</h2></center></CardTitle>
          <CardSubtitle><h4><center>{item.lieu}</center></h4></CardSubtitle> 
          <center>
              <a href={item.link} ><Button>Consulting</Button></a></center>   
        </CardBody>
      </Card>
    
      </div>


        </div>
      
      
        );
      }
  }
  
  
   
  export default Staticitem;