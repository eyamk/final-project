import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class RestaurantAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="bgadmin">
        <div className='home-container'>
                 <center><h2>restaurant</h2><br/><br/><br/><br/><br/>
                 <Link to='/restaurantlist'>
                 <button className="btn">restaurant List</button>
                 </Link>
                 <Link to='/addContact'>
                 <button className="btn">Add restaurant</button>
                 </Link></center>
     
        </div>
        </div> );
    }
    
}
 
export default RestaurantAdmin;