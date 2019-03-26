import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class RestaurantItemAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
    
    render() { 
        const {item}=this.props
        console.log(this.props.contacts)
        return ( <div className='contact-item-container'>
                    {/* <h2>Name : {item.name}</h2>
                     <img src={item.image} width="100%"/>
                    <h3>lieu : {item.lieu}</h3>
                    <h3>link :{item.link}</h3>
                    <Link to={`/editContact/${item._id}`}>
                    <button >Edit </button>
                    </Link>
                    <button onClick={()=>this.props.deleteReducer(item._id)}>Delete </button> */}

<Card>
     <CardImg    src= {item.image} width="100%"  /> 
         <CardBody>
          <CardTitle><center><h2>{item.name}</h2></center></CardTitle>
          <CardSubtitle><h4><center>{item.lieu}</center></h4></CardSubtitle> 
          <center>
              <a href={item.link} ><Button>Consulting</Button></a></center>   
        </CardBody>
        <br/><br/>
       <center> <Link to={`/editContact/${item._id}`}>
                    <button >Edit </button>
                    </Link>
                    <button onClick={()=>this.props.deleteReducer(item._id)}>Delete </button></center>
      </Card>
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
     return {
         deleteReducer:_id=>
         {
             dispatch({
                 type:'DELETE_RESTAURANT',
                 _id
             })

         }
     }
}

 
export default connect(null,mapDispatchToProps)(RestaurantItemAdmin)