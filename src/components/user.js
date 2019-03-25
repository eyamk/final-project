import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class User extends Component {
    render() {
      return (
        <div>




<section className="banner inner-page">
        <div className="banner-img" style={{backgroundImage: 'url("images/banner/register-bannerImg.jpg")'}}><img src="images/banner/register-bannerImg.jpg" alt style={{display: 'none'}} /></div>
        <div className="page-title">	
          <div className="container">
            <h1>Login</h1>
          </div>
        </div>
      </section>





            
             <section className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">Login &amp; Register</a></li>
          </ul>
        </div>
      </section>
      <section className="login-view">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="section-title">
              <h2>Login</h2>
              <p>Login to your account below</p>
            </div>
            <div className="input-box">
              <input type="text" placeholder="User Name" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            {/* <div className="check-slide">
              <label className="label_check" htmlFor="checkbox-01"><input id="checkbox-01" type="checkbox" /> Remember Me</label>
              <div className="right-link"> */}
                {/* <a href="#">Lost Password? </a> */}
             {/*  </div>
            </div> */}
            <div className="submit-slide">
              <input type="submit" defaultValue="Login" className="btn" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="section-title">
              <h2>REGISTER</h2>
              <p>Register now - Completely free</p>
            </div>
            <div className="input-box">
              <input type="text" placeholder="User Name" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Re-Password" />
            </div>
            <div className="submit-slide">
              <input type="submit" defaultValue="SIGN UP" className="btn" />
            </div>
          </div>
        </div>
        <div className="sosiyal-login">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <a href="#" className="facebook"><i className="fa fa-facebook" />Facebook</a>
            </div>
            <div className="col-sm-3 col-md-3">
              <a href="#" className="google-pluse"><i className="fa fa-google-plus" />Google</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </div>
        );
    }
    }
            export default User;