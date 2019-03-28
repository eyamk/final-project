import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class OfferAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="bgadmin">
        <div className='home-container'>
                 <center><h2>Offers</h2><br/><br/><br/><br/><br/>
                 <Link to='/offerlist'>
                 <button className="btn">offers List</button>
                 </Link>
                 <Link to='/addoffer'>
                 <button className="btn">Add offer</button>
                 </Link></center>
     
        </div>
        </div> );
    }
    
}
 
export default OfferAdmin;