import React, { Component } from 'react';
import { BrowserRouter as  Router,Switch, Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import team_logo from './inSpect-logo.svg';
import './App.css';
import './CreateAccount.css';
import {Login} from './Login.js';
import App, {CreateAccount} from './App';
const Home = () => (
  <Router>
  <div>
    <div className="ca-navbar">
      <ul style={styles.nav}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="create-account">Create Account</NavLink>
      </ul>
    </div>
    <Route path="/create-account" component={CreateAccount} />
    <Route path="/login" component={Login} />
  </div>
  </Router>
);

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: "inherit" }} />
  </li>
);

const styles = {};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  color:"white",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px",
};

export default Home;
