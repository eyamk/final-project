import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Banner from './banner'
import Aboutus from './aboutus'
import Feedback from './feedback'
import Staticlist from './staticlist'
import Partners  from './partners'
import Navbar from './mynav'
import Header from './header'
import Footer from './footer'






class Homepage extends Component {   
render() { 
    return ( <div className='routes-container'>
       

              <Route exact path='/' component={Navbar}/> 
             <Route exact path='/' component={Header}/> 
             <Route exact path='/' component={Banner}/> 
             <Route exact path='/' component={Staticlist}/>  
             <Route exact path='/' component={Aboutus}/>
             <Route exact path='/' component={Feedback}/>
             <Route exact path='/' component={Partners }/>
           
             <Route exact path='/' component={Footer}/>
             

    </div> );
}
}

export default Homepage;