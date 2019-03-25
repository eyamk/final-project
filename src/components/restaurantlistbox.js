import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-grid-system';
import Restaurantitembox from './restaurantitembox'



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
      this.props.searchReducer(this.state.keyword)
      
  }
    render() { 
        
        const {list}=this.props
        console.log(this.state.keyword)



        return ( 
        <div>

<section className="login-view">
<section className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link to='/'>Home</Link></li> 
          </ul>
        </div>
      </section>
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
     }
}
 

 

export default connect(mapStateToProps,mapDispatchToProps)(Restaurantlistbox);