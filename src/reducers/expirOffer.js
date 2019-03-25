import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class ExpirOffer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                       price:'',
                       val:'', 
             }
    }



    componentDidMount=()=>

    {
        this.setState({
            ...this.props.contacts.filter(el=>el._id===this.props._id)[0]
        })
    }
   

    render() { 
        return ( 
            <div className='add-contact-container'>
            <h1>Edit Contact</h1>
             Name :
             <input  type='text' name='name' value={this.state.name}/>
             Phone :
             <input  type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
             Email :
             <input  type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
             <Link to='/contacts'>
             <button onClick={this.editContact}>Edit Contact </button>
             </Link>

            </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        contacts:state.onedayofferReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editContactReducer:editcontact=>
        {
            dispatch({
                type:'EXPIR_OFFER',
                editcontact
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(ExpirOffer) ;
