import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';
class InterfaceUser extends Component {
    render() {
      return (
        

<Container>
<div className="group-tab-view">
        <div className="tab-menu">
          <ul>
            <li><a href="#">In box</a></li>
            <li className="active"><a href="#">Profile</a></li>
           
            <li><a href="#">LogOut</a></li>
            

          </ul>
        </div>
        <div className="forums-profile">
          <div className="img"><img src="images/user-img/forum-profileImg1.jpg" alt /></div>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
          <span>Forum Role: Master</span>
          <span>Topics Started: 9</span>
          <span>Replies Created: 3</span>
        </div>
      </div>
      </Container>
        );
    }
    }
            export default InterfaceUser;