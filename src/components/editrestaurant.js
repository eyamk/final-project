import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Editrestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       image:'',
                       lieu:'',
                    link:'' }
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount() {
        
        this.setState({
            ...this.props.contacts.filter((el)=>(el._id===this.props._id))[0]
        })
    }
    editContact=()=>
    {
        this.props.editReducer({...this.state})
    }
    render() { 
        
        return  ( <div className='add-contact-container'>
        <h2>Edit Contact</h2>
        <h5>Name </h5>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        <h5>image </h5>
        <input type='text' name='image'  value={this.state.image}  onChange={this.handleChange}/>
        <h5>lieu </h5>
        <input type='text' name='lieu'  value={this.state.lieu}  onChange={this.handleChange}/>
        <h5>link </h5>
        <input type='text' name='link'  value={this.state.link}  onChange={this.handleChange}/><br/>
        <Link to='/restaurantlist'>
        <button onClick={this.editContact}>Edit restaurant</button>
        </Link>

        </div>  );
    }
}
const mapStateToProps=(state)=>
{  return {
    contacts:state.restaurantAdminReducer
}
}
const mapDispatchToProps=(dispatch)=>
{
     return {
         editReducer:editrestaurant=>
         {
             dispatch({
                 type:'EDIT_RESTAURANT',
                 editrestaurant
             })

         }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Editrestaurant);