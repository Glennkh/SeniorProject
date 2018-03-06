import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import team_logo from './inSpect-logo.svg';
import './App.css';
import './CreateAccount.css';
import {Login} from './Login.js';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={CreateAccount} />

      <Route path="/login" component={Login} />
    </div>
  </Router>
);


class CreateAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email,
			username: props.username,
			password: props.password
		};
	}

  login(){return <Redirect to="/login"/>;};

	render() {
  // not initial render
		return (

			<div className="ca-container">
				<img src={team_logo} className="ca-logo" alt="logo" />
				<div className="ca-form">
					<div className="ca-form-header">EMAIL</div>
					<input id="email" className="ca-form-input" type="text"/>
					<div className="ca-form-header">USERNAME</div>
					<input id="username" className="ca-form-input" type="text"/>
					<div className="ca-form-header">PASSWORD</div>
					<input id="password" className="ca-form-input" type="text" />
					<input id="submit" className="ca-form-submit" type="button" value="Register" />

        </div>


          </div>



		);
	}
}

export default App;
export {CreateAccount};
