import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

    import axios from 'axios'


class OfferItemAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




    deleteoffer=()=>
    {  const {item} = this.props
    axios.delete(`/delete-offer/${item._id}`)   
  .then(()=>this.props.deleteReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
  
    
    render() { 
        const {item}=this.props
        console.log(this.props.contacts)
        return (
                    

<div className="col-md-4 col-sm-6">
          <div className="course-box">
            <div className="img">
              <img src={item.im} alt />
              <div className="course-info">
                <div className="date"><i className="fa fa-calendar"  />{item.date}</div>
                <div className="favorite"><a href="#"></a></div>
              </div>
            <span ><div className= {item.val}></div></span> 
            </div>
            <div className="comment-row">
              <div className="box"> <div className="course-name">{item.rest}</div>
            </div>
              <div className="enroll-btn"><br/>	
                

              <center> <Link to={`/editoffer/${item._id}`}>
                    <button className="btn" >Edit </button>
                    </Link>
                    <button className="btn" onClick={this.deleteoffer}>Delete </button></center>
      


              </div>
            </div>
          </div>
        </div>
        );
        
    }
}









const mapDispatchToProps=(dispatch)=>
{
     return {
         deleteReducer:_id=>
         {
             dispatch({
                 type:'DELETE_OFFER',
                 _id
             })

         }
     }
}

 
export default connect(null,mapDispatchToProps)(OfferItemAdmin)