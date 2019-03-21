import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Restaurantitem from './restaurantitem'


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='routes-container'>
                 <Route exact path='http://www.lepiratemonastir.com' component={Restaurantitem}/>   
               >
              

        </div> );
    }
}
 
export default Routes;