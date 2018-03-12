import { render } from "react-dom";
import React, { Component } from "react";
import warning  from './warning.png';
import hourglass from './hourglass-icon.png';
import checkmark from './checkmark-icon.png';
import map from './map.jpeg'
import './Dashboard.css';
class Dashboard extends Component {
  render(){
    const MONTH_NAMES = ["January ", "February ", "March ", "April ", "May ", "June ",
    "July ", "August ", "September ", "October ", "November ", "December "];

    const DAY_NAMES = ["Sunday"];
    return(
      <div className="dashboard-container">
        <div className="dashboard-banner">
          <h1 className="dashboard-header">Dashboard</h1>
        </div>

        <h2 className="dashboard-header">{DAY_NAMES[new Date().getDay()]}, {MONTH_NAMES[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()}</h2>

        <div className="dashboard-row">
          <div className="box">
            <h3 className="box-header"> Unassigned Issues</h3>
            <div className="pic-text">
              <img src={warning} className="picture" />
              <h4 className="text"> 15 Issues </h4>
            </div>
          </div>
          <div className="box">
            <h3 className="box-header"> Issues In-progress</h3>
            <div className="pic-text">
              <img src={hourglass} className="picture" />
              <h4 className="text"> 10 Issues </h4>
            </div>
          </div>
          <div className="box">
            <h3 className="box-header"> Resolved Issues</h3>
            <div className="pic-text">
              <img src={checkmark} className="picture" />
              <h4 className="text"> 50 Issues </h4>
            </div>
          </div>
        </div>
        <div className="map">
          <img src={map} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
