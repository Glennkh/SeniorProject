import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <header className="Login-header">
        <h1 className="Login-title">Login</h1>
      </header>
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="Login-field" controlId="email" bsSize="large">
            <ControlLabel className="Login-label">Email</ControlLabel>
            <FormControl className="Login-form-box"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="Login-field" controlId="password" bsSize="large">
            <ControlLabel  className="Login-label">Password</ControlLabel>
            <FormControl className="Login-form-box"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button className="Login-button"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Button className="Login-create-account-button"
            block
            bsSize="large"
            type="submit"
          >
            Create Account
          </Button>
        </form>
      </div>
    );
  }
}
