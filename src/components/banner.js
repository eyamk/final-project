import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'



class Banner extends Component {
    
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
  handlesubmit=()=>{
    axios.get('/get-contact').then (()=>this.props.searchReducer(this.state.keyword))
    .catch((err)=>alert(err))
    console.log(this.state.keyword)
  }

  
  

    render() { 
        
        return ( 
          <section className="banner" id="home">
          <div className="banner-img"><img src="https://wpblink.com/sites/default/files/wallpaper/food/68857/meal-wallpapers-hd-68857-9548098.png" alt /></div>
          <div className="banner-text">
            <div className="container">
              <h1>THERE IS NO LOVE MORE SINCERE</h1>
              <p>than the love of food.</p>
              <div className="search-box region">
            <div>
                  <input type="text" placeholder="Search by region" onChange={this. handlechange}/>
              <Link to='/morelist'><input type="submit" value="" onClick={this. handlechange} /></Link>    
                </div>
              </div>
              
               <div className="learning-btn" >
               <div className="search-box">
               <select className="btn" onChange={this.handlechange}>
              <option  className="btn">Search by region</option> 
              <option  value="Tunis">tunis</option>
              <option value="Sousse">Sousse</option>
              <option value="Monastir">Monastir</option>
              <option value="Sfax">Sfax</option>
              </select>
             
              <Link to='/morelist'><input className="search-region" type="submit"  value="" onClick={this.handlesubmit} /></Link>
              </div>
              </div>  
            </div>
          </div>
          
        </section>
  
          

    );
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
            type: 'SEARCH',
            keyword})


         }
         

     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Banner);