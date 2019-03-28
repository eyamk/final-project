import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditOffer extends Component {
    constructor(props) {
        super(props);
        this.state = { im:"",
                       date:'',
                       price:'',
                    rest:'' ,
                val:''}
    }
    handleChange=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    componentDidMount() {
        
        this.setState({
            ...this.props.list.filter((el)=>(el._id===this.props._id))[0]
        })
    }
    
    editoffers=()=>
    {
       axios.put(`/edit-offer/${this.state._id}`,{
           im:this.state.im,
        date:this.state.date,
        price:this.state.price,
        rest:this.state.rest,
        val:this.state.val
     }) 
      .then(()=>this.props.editReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        
        return  ( <div className='add-contact-container'>
       <center> <h2>Edit Offer</h2>
        <h5>image </h5>
        <input type='text' name='im' value={this.state.im} onChange={this.handleChange}/>
        <h5>date </h5>
        <input type='text' name='date'  value={this.state.date}  onChange={this.handleChange}/>
        <h5>price </h5>
        <input type='text' name='price'  value={this.state.price}  onChange={this.handleChange}/>
        <h5>rest </h5>
        <input type='text' name='rest'  value={this.state.rest}  onChange={this.handleChange}/>
        <h5>val</h5>
        <input type='text' name='val'  value={this.state.val}  onChange={this.handleChange}/><br/>
        <Link to='/offer'>
        <br/><br/><button className="btn" onClick={this.editoffers}>Edit Offer</button>
        </Link>
        </center>
        </div>  );
    }
}
const mapStateToProps=(state)=>
{  return {
    list:state.onedayofferReducer
}
}
const mapDispatchToProps=(dispatch)=>
{
     return {
         editReducer:editoffer=>
         {
             dispatch({
                 type:'EDIT_OFFER',
                 editoffer
             })

         }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditOffer);