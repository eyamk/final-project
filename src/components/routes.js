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
import Navbar from './mynav'
import Header from './header'
import Footer from './footer'
import User from './user'
import Homepage from './homepage'
import ContactUs from './contactus';
//ibtihel
import Event from './event' 
import Discover from './discover';
import Indoor from './indoor';
import Introduction from './introduction';
import Galery from './galery';
import Foodintro from './foodintro'
 import Listoccasion from './listeoccasion'
 import Listfood from './listefood';
 import Galeryintro from './galeryintrod';


import Eventheader from './eventheader'
import Eventbanner from './eventbanner'




import Offer from './offer'
import Offerheader from './offerheader'
import Offerbanner from './offerbanner'
import Onedayoffer from './onedayoffer';
import Dailyoffer from './dailyoffer';
class Routes extends Component {
    
    render() { 
        return ( <div className='routes-container'>


                  <Route exact path='/' component={Homepage}/>
              
                 <Route exact path='/morelist' component={Restaurantlistbox}/> 
                 <Route exact path='/morefeedback' component={Morefeedback}/>
                  <Route exact path='/user' component={User}/> 
                  <Route exact path='/contact' component={ContactUs}/>
                 
                 
                 

<Route exact path='/event' component={Event}/>
                 <Route exact path='/event' component={Navbar}/>
                <Route exact path='/event' component={Eventheader}/>

                 <Route exact path='/event' component={Eventbanner}/>

                 {/* <Route exact path='/event' component={Home}/> */}
                 <Route exact path='/event' component={Introduction}/>
                  <Route exact path='/event' component={Listoccasion}/> 
                 <Route exact path='/event' component={Discover}/>
                 <Route exact path='/event' component={Indoor}/>

                 <Route exact path='/event' component={Foodintro}/>
                 <Route exact path='/event' component={Listfood}/> 
                 <Route exact path='/event' component={Galeryintro}/> 
                
                 <Route exact path='/event' component={Footer}/> 
 
                 {/* <Route exact path='/event' component={Galery}/>  */}

                 <Route exact path='/offer' component={Offer}/>
                 <Route exact path='/offer' component={Navbar}/>
                 <Route exact path='/offer' component={Offerheader}/>
                <Route exact path='/offer' component={Offerbanner}/>
                <Route exact path='/offer' component={Onedayoffer}/>
                <Route exact path='/offer' component={Dailyoffer}/>

                  <Route exact path='/offer' component={Footer}/> 
                

        </div> );
    }
}
 
export default Routes;