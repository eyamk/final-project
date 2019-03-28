import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class AddOffer extends Component {
    constructor(props) {
        super(props);
        this.state = { im:"",
                       date:'',
                       price:'',
                    rest:'',
                val:'' }
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    
    addoffer=()=>
    {
      axios.post('/add-offer',{...this.state})
       .then(()=>this.props.addReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }

    
    render() { 
        return ( <div className='add-contact-container'>
        <center>
        <h2>Add offer</h2>
      
        <h5>image </h5>
        <input type='text' name='im' onChange={this.handleChange}/>
        <h5>date </h5>
        <input type='text' name='date' onChange={this.handleChange}/>
        <h5>price </h5>
        <input type='text' name='price' onChange={this.handleChange}/>
        <h5>rest </h5>
        <input type='text' name='rest' onChange={this.handleChange}/>
        <h5>val </h5>
        <input type='text' name='val' onChange={this.handleChange}/>
        <br/>
         <Link to='/offerlist'>
        <button className="btn" onClick={this.addoffer}>Add offer</button>
         </Link>
         </center>
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
     return {
         addReducer:newoffer=>
         {
             dispatch({
                 type:'ADD_OFFER',
                 newoffer
             })

         }
     }
}
 
export default connect(null,mapDispatchToProps)(AddOffer);