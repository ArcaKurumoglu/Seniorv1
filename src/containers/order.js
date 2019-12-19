import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./order.css";
export default class Orders extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
        <a href="/login" className="navbar-brand">{"Welcome to BilSports Panel"}</a>
<p className="pool">Pool Temperature : 24 °C </p>
<p className="occupancy">Sports Center Occupancy : 50% </p>
      </nav>

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
              <a href="#"><i class="ion-android-star-outline"></i>Announcements</a>
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


     
        <div className= "col-md-8 mb-4">
          <div className="card-1">
            <div className="card-body">
            <h1 className="baslik">Announcements</h1>
              <div className="form">
             
               
              </div>
            </div>          
          </div>
        </div>
      </div>
    )
  }
}
