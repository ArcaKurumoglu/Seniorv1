import React, { Component } from 'react'
import {Link} from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "./myaccount.css";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



var uniqid = require('uniqid')

 export class Myaccount extends Component {
    constructor(props) {
      super(props)
      const token = localStorage.getItem("token")
      let loggedIn = false
      this.state = {
        name: "",
        office: "",
        orderType: "",
        amount: 0,
        linkTo: "",
        status: "",
        price: "",
        error: false,
        loggedIn
      }
  
      if(token == null){
        loggedIn = false
      }
  
    }
  
  
    changeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    addOrder = (e) => {
      e.preventDefault(); //to prevent refreshing of the page
      const { name, office, orderType, amount, linkTo, status, price } = this.state;
  
      const newOrder = {
        id: uniqid(),
        name: name,
        office: office,
        orderType:orderType,
        amount:amount,
        linkTo:linkTo,
        status:status,
        price:price
      }
      console.log(newOrder);
  
  
      localStorage.setItem("token", "kedfjhdlkjvfdkjhg")
       this.setState({
         loggedIn: true
       })
      
      // if (!this.validateForm()) {
      //   this.setState({
      //     error: true
      //   })
      //   return;
      // }
  
  
       //{ type: "ADD_ORDER", payload: newOrder }
  
  
  
       //Redirect
       this.props.history.push("/order");
  
    }
  render() {
    if(this.state.loggedIn){
     
    }
    const { name, office, orderType, amount, linkTo, status, price } = this.state;
     
    return (
 
<div>
<div id="nav1">
        
       
        <nav className ="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/login" className="navbar-brand">{"Welcome to BilSports Panel"}</a>
<p className="pool">Pool Temperature : 24 °C </p>
<p className="occupancy">Sports Center Occupancy : 50% </p>

 </nav>

      </div>

      <section class="app" className="menus">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
  <aside class="sidebar">
         <header>
       <img src="https://w3.bilkent.edu.tr/logo/ing-amblem.png" width="40%" height="40%"></img>
        <p className="bilsportheader"align="center">BilSports <br></br>User Panel</p>
        <br></br><br></br>
      </header>
    <nav class="sidebar-nav">
 
      <ul>
        <li>
          <a href="#"><i class="ion-bag"></i><span>Home</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-clock-outline"></i> Courses</a>
            </li>
            <li>
              
              <a href="#"><i class="ion-ios-clock-outline"></i>Registrations</a>
            </li>
            <li>
              <a href="account"><i class="ion-android-star-outline"></i>Announcements</a>
            </li>
            <li>
              <a href="#"><i class="ion-heart-broken"></i>Account</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="ion-ios-settings"></i> <span class="">Facilities</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-alarm-outline"></i>Pool</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-camera-outline"></i>Gym</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-chatboxes-outline"></i>Squash</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-cog-outline"></i>Football</a>
            </li>
          </ul>
        </li>
      
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Statistics</span></a>
        
        </li>
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Gallery</span></a>
        
        </li>
        <li>
          <a href="#"><i class="ion-ios-analytics-outline"></i> <span class="">Contact</span></a>
        
        </li>
       
        <li>
        
        </li>
      </ul>
    </nav>
  </aside>
</section>

<div className="announcementForm1">

<div className="card1">
  <div className="card-header1">
    <h4>Make Announcement</h4>
  </div>
  <div className="card-body-account">
    {
      // error ?
      // <div className ="alert alert-danger">
      //   Lütfen bilgilerinizi kontrol ediniz.
      // </div>
      // :null
    }
   
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlform="name">Announcement Subject:</label>
        <input
          type="text"
          name="name"
          id="name"
          value = {name}
          placeholder="Enter Subject" 
          className="form-control"
          onChange = {this.changeInput}
          />
      </div>

      <div className="form-group">
        <label htmlform="office">Announcement Owner</label>
        <input
          type="text"
          name="office"
          id="office"
          value = {office}
          placeholder="Enter owner"
          className="form-control"
          onChange = {this.changeInput}

           />

      </div>

      <div className="form-group">
        <label htmlform="orderType">Announcement Date</label>
        <input
          type="date"
          name="orderType"
          id="orderType"
          value = {orderType} /* burası değişecek */
          placeholder="Enter Date"
          className="form-control"
          onChange = {this.changeInput}

           />

      </div>

      <div className="form-group">
        <label htmlform="status">Announcement Content</label>
        <textarea
        type="multiline"
          name="status"
          id="status"
          wrap="hard"
          value = {status}
          placeholder="Enter the content"
          className="form-control"
          onChange = {this.changeInput}

           />

      </div>

     

        <button className="btn btn-danger" type="submit">Submit Announcement</button>

    </form>
  </div>
</div>
</div>

    
      </div>
    );
  }
}export default Myaccount;
