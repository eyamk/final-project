import React, { Component } from 'react';
import Navbar from './mynav'
import Banner from './banner'
import Header from './header'
import Aboutus from './aboutus'
import RestaurantList from './restaurantList';
import Feedback from './feedback'
import Footer from './footer'
import Routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
          
        <Header/>

        <Router>
        <Routes/>
        </Router>
         <Footer/> 
      </div>
    );
  }
}

export default App;
