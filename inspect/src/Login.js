import React, { Component } from 'react';
import logo from './logo.svg';
import team_logo from './inSpect-logo.svg';
import './App.css';
import './CreateAccount.css';

class  Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email,
			password: props.password
		};
	}

	render() {
		return (
			<div className="ca-container">
				<img src={team_logo} className="ca-logo" alt="logo" />
				<div className="ca-form">
					<div className="ca-form-header">EMAIL</div>
					<input id="email" className="ca-form-input" type="text"/>
					<div className="ca-form-header">PASSWORD</div>
					<input id="password" className="ca-form-input" type="text" />
					<input id="submit" className="ca-form-submit" type="button" value="Login" />
				</div>
			</div>
		);
	}
}
export {Login};
