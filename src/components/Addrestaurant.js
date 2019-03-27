import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class Addrestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       image:'',
                       lieu:'',
                    link:'',
                paragraphe:'' }
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    
    addContact=()=>
    {
      axios.post('/add-contact',{...this.state})
       .then(()=>this.props.addReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }

    // addContact=()=>
    // {
    //     this.props.addReducer({...this.state,_id:Math.random()*1000+''})
    // }
    render() { 
        return ( <div className='add-contact-container'>
        <center>
        <h2>Add restaurant</h2>
        <h5>Name </h5>
        <input type='text' name='name' onChange={this.handleChange}/>
        <h5>image </h5>
        <input type='text' name='image' onChange={this.handleChange}/>
        <h5>lieu </h5>
        <input type='text' name='lieu' onChange={this.handleChange}/>
        <h5>link </h5>
        <input type='text' name='link' onChange={this.handleChange}/>
        <h5>paragraphe </h5>
        <input type='text' name='paragraphe' onChange={this.handleChange}/>
        <br/>
         <Link to='/restaurantlist'>
        <button className="btn" onClick={this.addContact}>Add restaurant</button>
         </Link>
         </center>
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>
{
     return {
         addReducer:newrestaurant=>
         {
             dispatch({
                 type:'ADD_RESTAURANT',
                 newrestaurant
             })

         }
     }
}
 
export default connect(null,mapDispatchToProps)(Addrestaurant);