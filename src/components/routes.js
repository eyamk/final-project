import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Restaurantlistbox from './restaurantlistbox'
import Morefeedback from './morefeedback'
import Navbar from './mynav'

import Footer from './footer'
import User from './user'
import Homepage from './homepage'
import ContactUs from './contactus';
//ibtihel
import Event from './event' 
import Discover from './discover';
import Indoor from './indoor';
import Introduction from './introduction';

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

import InterfaceUser from './interfaceuser'
import Admin from './admin'
import  Adminresto from './adminresto'
import  Adminoffer from './adminoffer'


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
                
                  <Route exact path='/interface' component={InterfaceUser}/>

                  <Route exact path='/admin' component={Admin}/>

<Route exact path='/admin/adminresto' component={Adminresto}/>
<Route exact path='/admin/adminoffer' component={Adminoffer}/>

        </div> );
    }
}
 
export default Routes;