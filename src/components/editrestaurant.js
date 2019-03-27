import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class Editrestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'',
                       image:'',
                       lieu:'',
                    link:'' ,
                paragraphe:''}
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
    // editContact=()=>
    // {
    //     this.props.editReducer({...this.state})
    // }
    editContact=()=>
    {
       axios.put(`/edit-contact/${this.state._id}`,{
           name:this.state.name,
        image:this.state.image,
        lieu:this.state.lieu,
        link:this.state.link,
        paragraphe:this.state.paragraphe
     }) 
      .then(()=>this.props.editReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        
        return  ( <div className='add-contact-container'>
       <center> <h2>Edit restaurant</h2>
        <h5>Name </h5>
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        <h5>image </h5>
        <input type='text' name='image'  value={this.state.image}  onChange={this.handleChange}/>
        <h5>lieu </h5>
        <input type='text' name='lieu'  value={this.state.lieu}  onChange={this.handleChange}/>
        <h5>link </h5>
        <input type='text' name='link'  value={this.state.link}  onChange={this.handleChange}/>
        <h5>paragraphe</h5>
        <input type='text' name='paragraphe'  value={this.state.paragraphe}  onChange={this.handleChange}/><br/>
        <Link to='/restaurantlist'>
        <br/><br/><button className="btn" onClick={this.editContact}>Edit restaurant</button>
        </Link>
        </center>
        </div>  );
    }
}
const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
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