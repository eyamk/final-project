// import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';
//     import { Container , Row, Col} from 'react-grid-system';
//     import './App.css';
//     import {Link} from 'react-router-dom'


// class Adminitemresto extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state= { name:'',
//     //     image:'',
//     //     link:'',
//     //   _id:'' ,
//     // lieu:'' }
//     // }
  

//     // handleChange=(event)=>
//     // {
//     //     this.setState({
//     //         [event.target.name]:event.target.value
//     //     })
//     // }
//     // componentDidMount() {
        
//     //     this.setState({
//     //         ...this.props.contacts.filter((el)=>(el._id===this.props._id))[0]
//     //     })
//     // }
//     // editresto=()=>
//     // {
//     //     this.props.editReducer({...this.state})
//     // }

//     render() { 
//         const {item}=this.props
//         console.log(this.props.contacts)
//         return( <div>
//    <Container>   
 
//   <Row>  
//       <br/>
//     <Col sm={2}>
//             <div className="input-box">
            
//               <div className="input-box"><span value={item.name} /></div>

//             </div> 
//     </Col>
//     <Col sm={2}>
   

// <div className="input-box"><img src= {item.image} /></div>

            
//     </Col>
//     <Col sm={2}>
//     <div className="input-box"><span value={item.lieu} /></div>

//    </Col>
//    <Col sm={2}><div className="input-box"><span value={item.link} /></div>


           
//     </Col> 
//     <Col sm={2}>
  
//        <div className="input-box"><span value={item.paragraphe} /></div>
         
         
//     </Col>  
//     <Col sm={2}>
   
         

//     <div className="input-box">   <span value={item._id} /></div>
     
//     </Col>  
//     </Row>
//    <Row>
//     <Col sm={1}>
//     <div className="enroll-btn"><br/>	
//                 <button className="btn" onClick={this.editresto}>Edit</button>
//               </div>
//     </Col>   
//     <Col sm={1}>
//     <div className="enroll-btn"   className ="del"><br/>	
//                 <button className="btn" onClick={()=>this.props.deleteReducer(item._id)}>Delete</button>
//               </div>
//     </Col>  
//     <br/>
//     </Row>    
//     <br/> <br/> <br/> <br/>
//    </Container>   
//         </div>







//       );
//     }
// }

// const mapStateToProps=(state)=>
// {  return {
//     contacts:state.onedayofferReducer
// }
// }
// const mapDispatchToProps=(dispatch)=>
// {
//      return {
//         //  editReducer:editoffer=>
//         //  {
//         //      dispatch({
//         //          type:'EDIT_OFFER',
//         //          editoffer
//         //      })

//         //  }

//         deleteReducer:_id=>
//          {
//              dispatch({
//                  type:'DELETE_OFFER',
//                  _id
//              })

//          }
//      }
// }
 
// export default connect(null,mapDispatchToProps)(Adminitemresto);




