import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Restaurantitem from './restaurantitem'
import { Container, Row, Col } from 'react-grid-system';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


import './App.css'

class MoreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
    }
    render() { 
        console.log(this.props.list)
        const {list}=this.props
        return ( 
        <div>
            <div className='contact-list-container'>
       
        <div className='contact-list-container1'>
        
            <Container>
                <Row>
            {list.map((el,index)=><Col sm={3}><Restaurantitem item={el} key={index}/></Col>)}
            </Row>
            </Container>
        
                  
                  
        </div>
        
        </div> 
<br/>
{/* <center><h4><Link to='/restaurantlist'>..See More </Link></h4></center> */}

<center><Pagination aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink >
            <Link to='/feedback'>1</Link>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
           <Link to='/feedback'>2</Link> 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink >
          <Link to='/feedback'>3</Link> 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
          <Link to='/feedback'>4</Link> 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
          <Link to='/feedback'>5</Link> 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last />
        </PaginationItem>
      </Pagination></center>

        </div>);
    }
}

const mapStateToProps=(state)=>
{  return {
    list:state.restaurantReducer
}
}
 
export default connect(mapStateToProps)(MoreList);