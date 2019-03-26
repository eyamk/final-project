import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Container , Row, Col} from 'react-grid-system';
    import './App.css';
    import {Link} from 'react-router-dom'
import Adminitemoffer from './adminitemoffer';



class Adminoffer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  


    render() { 
      
      console.log(this.props.restaurants)
        const {restaurants}=this.props
        return ( <div>
      

      <div className ="adminbar">
   <Container>
   <Row>
   
      <Col sm={11}> <h3>     Platform Admin</h3></Col>

    <Col sm={1}><img src ="images/adminn.png" className ="adminimage"/></Col>
</Row></Container>
</div>    
<Container>
    
            <div className="navbar navbar-inverse">
             
              
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                 
                  
                  
                  <li className="sub-menu">
                    <a href="#listoffer">Offers List</a><span className="arrow"><i className="fa fa-plus" /></span>
                   
                  </li>
 
                  <li className="sub-menu">
                  <Link to='/admin/adminresto'> our partners List</Link> <span className="arrow"><i className="fa fa-plus" /></span>
                    
                  </li>
                  <li className="sub-menu">
                    <a href="event">In box</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>
                      <li><Link to='/'> <span>Received</span></Link></li>
                      <li><Link to='/'> <span>Send</span></Link></li>
                     </ul>
                  </li>
                    
               
                  <li className="sub-menu">
                    <a href="event">Eya</a><span className="arrow"><i className="fa fa-plus" /></span>
                   
                  </li>
                  <li className="sub-menu">
                    <a href="event">Account</a><span className="arrow"><i className="fa fa-plus" /></span>
                    <ul>
                      <li><Link to='/'> <span>LOGIN</span></Link></li>
                      <li><Link to='/'> <span>LOGOUT</span></Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            </Container>


            <div className="section-title" id="listrest">
          <h2>Add an offer </h2><br/><br/>

                                    <div>
                                      <Container>   
                                        <Row>  
                                            <br/>
                                          <Col sm={2}>
                                                  <div className="input-box">
                                                  <input type='text' name='name'/>

                                                  </div> 
                                          </Col>
                                          <Col sm={2}>
                                          <div className="input-box">
                                                <input type='text' name='name'/>
                                          </div> 
                                          </Col>
                                          <Col sm={2}>
                                          <div className="input-box">
                                          <input type='text' name='name' />
                                                  </div> 
                                        </Col>
                                        <Col sm={2}>
                                        <div className="input-box">
                                        <input type='text' name='name' />


                                                  </div> 
                                                
                                          </Col> 
                                          <Col sm={2}>
                                          <div className="input-box">
                                          <input type='text' name='name'  />


                                                  </div> 
                                              
                                          </Col>  
                                          <Col sm={2}>
                                          <div className="input-box">
                                          <input type='text' name='name'  />

                                                  </div> 
                                              
                                          </Col>  
                                          </Row>
                                        <Row>
                                          <Col sm={1}>
                                          <div className="enroll-btn"><br/>	
                                                      <a href="#" className="btn">Edit</a>
                                                    </div>
                                          </Col>   
                                          <Col sm={1}>
                                          <div className="enroll-btn"   className ="del"><br/>	
                                                      <a href="#" className="btn">Delete</a>
                                                    </div>
                                          </Col>  
                                          <br/>
                                          </Row>    
                                          <br/> <br/> <br/> <br/>
                                        </Container>   
                                              </div> </div>







        <div className="section-title" id="listoffer">
          <h2>Offers List</h2>
        </div>
        <div>
<br/><br/>
        <div >
        {
           restaurants.map((el,index)=><Adminitemoffer item={el} key={index}/>)
        }
        </div>

        <br/><br/><br/>

      </div>



      </div>);
    }
}

const mapStateToProps=(state)=>
{  return {
    restaurants:state.onedayofferReducer
}
}
 
export default connect(mapStateToProps)(Adminoffer);