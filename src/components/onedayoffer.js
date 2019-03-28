import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css'
import Onedayitem from './onedayitem';
import axios from 'axios'

class Onedayoffer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        price:"",
        val:'',
        date:''
        }
  }
  componentDidMount=()=>{
    axios.get('/get-offer').then((res)=>this.props.updateContactReducer(res.data))
} 

  render() { 
      const {offers}=this.props
        
        return ( <div>
         


       <section className="our-course">
        <div className="container">
          <div className="section-title">
            <h2>iFood One Day Event offers</h2>
          </div>
          <center> <h3> Our partners offers you a sweet gift for your special day</h3>
        <h3>All inclusive ! </h3>
         <br/><br/>

         </center>
         <div className="row">
           
             {offers.map((el,index)=><Onedayitem item={el} key={index}/>)}

          </div>
        </div>
      </section>
  
       </div>   


        )

    
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

         } , updateContactReducer:offers=>
         {
             dispatch({
                 type:'UPDATE_OFFER',
                 offers
             })
         }
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(Onedayoffer);