import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import OfferItemAdmin from './OfferItemAdmin'
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios'



class OfferListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount=()=>{
        axios.get('/get-offer').then((res)=>this.props.updateContactReducer(res.data))
    }


    render() { 
        console.log(this.props.list)
        const {list}=this.props
        return ( <div className='contact-list-container'>
        <h2>Offer List</h2>
        <div className='contact-list-container1'>
        <Row>
        {
            list.map((el,index)=><Col sm={4}><OfferItemAdmin item={el} key={index}/></Col>)
        }
          </Row>        
                  
        </div><br/><br/><br/>
        <Link to='/offeradmin'>
        <center><button className="btn">retour</button></center>
        </Link>
        </div> );
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
        updateContactReducer:offers=>
        {
            dispatch({
                type:'UPDATE_OFFER',
                offers
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(OfferListAdmin );