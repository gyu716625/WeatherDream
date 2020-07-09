/*global kakao*/ 
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LocationSearch from './LocationSearch';
import Weather from './Weather';
import MyPage from './MyPage';
import Login from "./Login";
import SignUp from "./Signup";

// 카카오 지도 api 연동  - 참고링크 : https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-2-%EC%95%B1%ED%82%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0
// openWeather api 연동 (key 발급) - 연동 완료


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      userInfo: { username: '', email: '', mobile: '' },
    };
  
    this.loginHandler = this.loginHandler.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.loginSession = this.loginSession.bind(this);
  }

  componentDidMount(){

  }

  loginSession(){
    let isLogin;
    fetch('http://14.50.138.127:3001/')
        .then((res) => res.json())
        .then((res) => {
          console.log('res.message',res.message)
          isLogin = res.message;
    });
    console.log('check:',isLogin)
    return isLogin;
  }

  loginHandler(bool) {
    this.setState({
      isLogin: bool,
    });
  }
  
  getUserInfo() {
    fetch('http://14.50.138.127:3001/user/info', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ userInfo: json });
        console.log(this.state);
      });
  }
  

  render() {
    const { userInfo } = this.state;
    const isLogin = this.loginSession(); 

    console.log(this.loginSession);
    console.log('isLogin',isLogin)
    return (
      <div>
        <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Weather Dream </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} isLogin = {this.state.isLogin} getUserInfo= {this.getUserInfo}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <LocationSearch />
              }
              return <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />
            }}
          />
            <Route path='/sign-in' render={() => <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />}/>
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
      </div>
    );
  }
}
export default App;

