// import Discover from './discover';
// import Indoor from './indoor';
// import Outdoor from './outdoor';
// import Intro from './intro';
// import Reserv from'./reserv';
import Introduction from './introduction';
import Galery from './galery';
// import Foodintro from './foodintro'
// import Listoccasion from './listeoccasion'
// import Listfood from './listefood';
// import Galeryintro from './galeryintrod';

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
// import { Container, Row, Col } from 'react-grid-system';

import './App.css'
import Navbar from './mynav'


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
       
        return (<div>
{/* <Link to='/event'>{Navbar}</Link> */}
 {/* <Link to='/event'>{Home}</Link>  */}
<Link to='/event'>{Introduction}</Link>
<Link to='/event'>{Galery}</Link>

{/* 

<Link to='/event'>{Introduction}</Link>
<Link to='/event'>{Listoccasion}</Link> */}
{/* <Link to='/event'>{Discover}</Link> */}
{/* <Link to='/event'>{Logoo}</Link>
<Link to='/event'>{Indoor}</Link>
<Link to='/event'>{Outdoor}/</Link>
<Link to='/event'>{Foodintro}</Link>
<Link to='/event'>{Listfood}</Link>
<Link to='/event'>{Galeryintro}</Link>
<Link to='/event'>{Galery}</Link> */}

<br/><br/>
        </div>);
    }
}
export default Event