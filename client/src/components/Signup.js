import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import "./LoginANDSignup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return this.state.isSignup ? (
      <Redirect to="/login" />
    ) : (
      <div className="logForm">
        <center className="innerForm">
          <h1 className="formTitle">Sign Up</h1>
          <form
            className="formWrap"
            onSubmit={(e) => {
              e.preventDefault();
              fetch("http://14.50.138.127:3001/user/signup", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                if (res.status === 200) {
                  alert("Membership. Please log in.");
                  this.props.history.push("/Signin");
                } else if (res.status === 409) {
                  alert("You are already registered.");
                }
                //console.log("res:", res);
              });
            }}
          >
            <div className="inputWrapper">
              <input
                className="inputSection"
                type="email"
                placeholder="Please enter your e-mail"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div className="inputWrapper">
              <input
                className="inputSection"
                onChange={this.handleInputValue("password")}
                type="password"
                placeholder="Please enter a password"
              ></input>
            </div>
            <div className="inputWrapper">
              <input
                className="inputSection"
                onChange={this.handleInputValue("username")}
                placeholder="Name"
              ></input>
            </div>
            <div className="alreadyID">
              <Link to="/Signin">Already have an ID?</Link>
            </div>
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Signup);
