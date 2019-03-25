import React, { Component } from 'react';
import {connect} from 'react-redux'

    
    import './App.css'

    class Onedayitem  extends Component {
      constructor(props) {
        super(props);
        this.state = {  
          price:"",
          val:'',
          date:''
        }
      }
      Datediff =() => {
        let n = new Date();
        let d = n.getTime();
        let date= this.props.offers
        let offdat=date.getTime()
      
        if (offdat< d )
        this.setState ({
       price:'EXPIR',
      
          })
     }
     
      render() { 
        const {item}=this.props 
        
        return ( 
          <div className="col-md-4 col-sm-6">
          <div className="course-box">
            <div className="img">
              <img src={item.im}alt />
              <div className="course-info">
                <div className="date"><i className="fa fa-calendar"  />{item.date}</div>
                <div className="favorite"><a href="#"></a></div>
              </div>
            <span ><div className= {item.val}><div onChange={this.Datediff}>{item.price}</div></div></span> 
            </div>
            <div className="comment-row">
              <div className="box"> <div className="course-name">{item.rest}</div>
            </div>
              <div className="enroll-btn"><br/>	
                <a href="#" className="btn">Booking</a>
              </div>
            </div>
          </div>
        </div>

    
    );
  }
    }
    const mapStateToProps=(state)=>
{  return {
  offers:state.onedayofferReducer
}
}
  const mapDispatchToProps=(dispatch)=>
  {
       return {
           expirReducer:valid=>
           {
               dispatch({
                   type:'EXPIR_OFFER',
                   valid
               })
  
           }
       }
  }

    //      );
    //   }
    // }
     
    export default connect(mapStateToProps,mapDispatchToProps)(Onedayitem ) ;
 

//     const = ({item}) => {
    
//    Datediff =() => {
//     let n = new Date();
//     let d = n.getTime();
//     let date= this.state.date.getTime()
  
//     if (date < d )
//     this.setState ({
//    price:'EXPIR',
//     val:'price free',
//       }) }
  
//         return ( 
    
//             <div className="col-md-4 col-sm-6">
//             <div className="course-box">
//               <div className="img">
//                 <img src={item.im}alt />
//                 <div className="course-info">
//                   <div className="date"><i className="fa fa-calendar"  />{item.date}</div>
//                   <div className="favorite"><a href="#"></a></div>
//                 </div>
//                 <div className= {item.val} onChange={this.Datediff()}>{item.price}</div>
//               </div>
//               <div className="comment-row">
//                 <div className="box"> <div className="course-name">{item.rest}</div>
//               </div>
//                 <div className="enroll-btn"><br/>	
//                   <a href="#" className="btn">Booking</a>
//                 </div>
//               </div>
//             </div>
//           </div>
  
      
//       );
//     }

//     const mapDispatchToProps=(dispatch)=>
//     {
//          return {
//              expirReducer:valid=>
//              {
//                  dispatch({
//                      type:'EXPIR_OFFER',
//                      valid
//                  })
    
//              }
//          }
//     }


// export default  connect(null,mapDispatchToProps)(Onedayitem);
























