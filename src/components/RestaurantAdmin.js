import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class RestaurantAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='home-container'>
                 <center><h2>restaurant</h2>
                 <Link to='/restaurantlist'>
                 <button>restaurant List</button>
                 </Link>
                 <Link to='/addContact'>
                 <button>Add restaurant</button>
                 </Link></center>
        </div> );
    }
}
 
export default RestaurantAdmin;