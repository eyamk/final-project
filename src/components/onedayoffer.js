import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css'
import Onedayitem from './onedayitem';


class Onedayoffer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        price:"",
        val:'',
        date:''
        }
  }
   

  
  //  Datediff =() => {
  //   let n = new Date();
  //   let d = n.getTime();
  //   let date= this.state.date.getTime()
  
  //   if (date < d )
  //   this.setState ({
  //  price:'EXPIR',
  //   val:'price free',
  //     }) }
  

      

              // componentDidMount=()=>

              // {
              //     this.setState({
              //         ...this.props.offers.filter(el=>el._id===this.props._id)[0]
              //     })
              // }



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

         }
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(Onedayoffer);