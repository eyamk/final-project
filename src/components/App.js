import React, { Component } from 'react';
import Navbar from './mynav'
import Banner from './banner'
import Header from './header'
import Aboutus from './aboutus'
import RestaurantList from './restaurantList';
import Feedback from './feedback'
import Footer from './footer'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
          
        <Header/>
        <Banner/>
        <Aboutus/>
        <RestaurantList/>
        <Feedback/>
        <Footer/>
      </div>
    );
  }
}

export default App;
