import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Banner from './banner'
import Aboutus from './aboutus'
import Feedback from './feedback'
import App from './App'
import Staticlist from './staticlist'
import Restaurantlistbox from './restaurantlistbox'
import Partners  from './partners'
import Morefeedback from './morefeedback'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='routes-container'>
                
                 <Route exact path='/' component={Banner}/> 
                 <Route exact path='/' component={Staticlist}/>  
                 <Route exact path='/' component={Aboutus}/>
                 
                  <Route exact path='/morelist' component={Restaurantlistbox}/> 
                 <Route exact path='/' component={Feedback}/>
                 <Route exact path='/' component={Partners }/>
                 <Route exact path='/' component={Morefeedback}/>
                 

                 

        </div> );
    }
}
 
export default Routes;