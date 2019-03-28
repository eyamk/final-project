import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';
import Restaurantitembox from './restaurantitembox'
import Header from './header'
import axios from 'axios'

import './App.css'


class Restaurantlistbox extends Component {

    constructor(props) {
      super(props);
      this.state = {
         keyword:''
         }
  }
  handlechange=(event)=>{
    
      this.setState({
          keyword:event.target.value
      });

     axios.get('/get-contact').then(() =>this.props.searchReducer(this.state.keyword))
     .catch((err)=>alert(err))
  }



  componentDidMount=()=>{
    axios.get('/get-contact').then((res)=>this.props.updateContactReducer(res.data))
}

    render() { 
        
        const {list}=this.props
        console.log(this.state.keyword)



        return ( 
        <div>
<Header/>
<br/><br/><br/><br/>
<section className="login-view">

      <br/>
      <Container>
          
          <Row>
              <Col sm={4}></Col>

              <Col sm={4} >
             <div className="input-box search">
              <input type="text" placeholder="Search by the name" className="search"  onChange={this.handlechange} />
              
         </div>
             
        </Col>

            <Col sm={4}></Col>
            </Row>
            </Container>
</section>

            <div className='contact-list-container'>
       
        <div className='contact-list-container1'>
        
            <Container>
                <Row>
            {list.map((el,index)=><Col sm={4}><Restaurantitembox item={el} key={index}/></Col>)}
            </Row>
            </Container>    
        </div>
 
        </div> 

        </div>);
    }
}



const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
}
}

 const mapDispatchToProps=(dispatch)=>
{
     return {
      searchReducer :keyword=>{
        dispatch({
            type: 'SEARCH-NAME',
            keyword})


         }
         , updateContactReducer:listinitial=>
         {
             dispatch({
                 type:'UPDATE_RESTAURANT',
                 listinitial
             })
         }
     }
}
 

 

export default connect(mapStateToProps,mapDispatchToProps)(Restaurantlistbox);