import React from 'react';
import { Link, Route, withRouter, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import "./LoginANDSignup.css";
import { GoSignIn } from "react-icons/go";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    return (
      <div className="logForm">
        <center className="innerForm">
          <h1 className="formTitle">Sign In</h1>
          <form
            className="formWrap"
            onSubmit={(e) => {
              e.preventDefault();
              fetch("http://14.50.138.127:3001/user/signin", {
                method: "POST",
                body: JSON.stringify(this.state),
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  if (res.status === 200) {
                    return res.json();
                  }
                })
                .then((res) => {
                  console.log(res);
                  cookie.save("isLogin", res.isLogin);
                  cookie.save("userId", res.id);
                  this.props.loginHandler(
                    cookie.load("isLogin"),
                    cookie.load("userId")
                  ); // 로그인 isLogin으로 변경
                });
            }}
          >
            <div className="inputWrapper">
              <label>Email address : </label>
              <input
                className="inputSection"
                type="email"
                placeholder="Enter email"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div className="inputWrapper">
              <label>Password : </label>
              <input
                className="inputSection"
                type="password"
                placeholder="Enter password"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <Link to={"/LocationSearch"}>
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </Link>
            <Link to={"/Signup"}>
              Join Us <GoSignIn />
            </Link>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);