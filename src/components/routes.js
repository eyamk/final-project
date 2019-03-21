import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Banner from './banner'
import Aboutus from './aboutus'
import RestaurantList from './restaurantList';
import Feedback from './feedback'
import MoreList from './morelist'
import Seemore from './seemore'
import App from './App'
import Staticlist from './staticlist'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='routes-container'>
                  {/* <Route exact path='/home' component={App}/> */}
                 <Route exact path='/' component={Banner}/> 
                 <Route exact path='/' component={Staticlist}/>  
                 <Route exact path='/' component={Aboutus}/>
                 
                {/* <Route exact path='/' component={RestaurantList}/>/*}
                 {/* <Route exact path='/' component={Seemore}/> */}
                  <Route exact path='/morelist' component={MoreList}/> 
                 <Route exact path='/' component={Feedback}/>
                 {/* <Route exact path='/' component={MoreList}/> */}
                 

        </div> );
    }
}
 
export default Routes;