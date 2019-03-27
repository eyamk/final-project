import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import axios from 'axios'


class RestaurantItemAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




    deleteContact=()=>
    {  const {item} = this.props
    axios.delete(`/delete-contact/${item._id}`)   
  .then(()=>this.props.deleteReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
  
    
    render() { 
        const {item}=this.props
        console.log(this.props.contacts)
        return ( <div className='contact-item-container'>
                    

<Card>
     <CardImg    src= {item.image} width="100%"  /> 
         <CardBody>
          <CardTitle><center><h2>{item.name}</h2></center></CardTitle>
          <CardSubtitle><h4><center>{item.lieu}</center></h4></CardSubtitle> 
          <CardSubtitle><h4><center>{item.paragraphe}</center></h4></CardSubtitle> 
          <center>
              <a href={item.link} ><Button>Consulting</Button></a></center>   
        </CardBody>
        <br/><br/>
       <center> <Link to={`/editContact/${item._id}`}>
                    <button className="btn" >Edit </button>
                    </Link>
                    <button className="btn" onClick={this.deleteContact}>Delete </button></center>
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