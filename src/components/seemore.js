import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';

import './App.css'



class Seemore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
       
        return (<div>

<br/><br/>
<center><h4><Link to='/morelist'><b><h3>..See More</h3></b> </Link></h4></center>
<br/><br/>
        </div>);
    }
}
export default Seemore