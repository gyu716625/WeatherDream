/*global kakao*/
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LocationSearch from './LocationSearch';
import Weather from './Weather';
import Login from "./Login";
import Signup from "./Signup";
import cookie from 'react-cookies';
import ChatApp from "./Chat/ChatApp";


// 카카오 지도 api 연동 - 참고링크 : https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-2-%EC%95%B1%ED%82%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0
// openWeather api 연동 (key 발급) - 연동 완료

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    isLogin: false,
    userId: '',
    userInfo: { username: '', email: '', },
    token: cookie.load('userId'),
  };
  //console.log(document.cookie);
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

loginHandler(bool,id) {
  this.setState({
    isLogin: bool,
    userId: id,
  });
}

getUserInfo(id) {
  if(cookie.load('isLogin')){
    fetch(`http://14.50.138.127:3001/user/mypage/info/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
    .then((res) => res.json())
    .then((json) => {
    //this.setState({ userInfo: json });
    //console.log(this.state);
      console.log(json);
      this.setState({
        userInfo:{
        username: json.username,
        email: json.email,
        },
      })
    });
  } else {
    console.log('사용자 정보를 불러올 수 없습니다.')
  }
}

componentDidUpdate(){
  //console.log('this.state',this.state);
}

render() {
  const { userInfo } = this.state;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (cookie.load('isLogin')) {
                return <LocationSearch getUserInfo={this.getUserInfo} session={this.state} />
              }
              return <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />
              }}
              />
              <Route path='/Signin' render={() => {
                if (cookie.load('isLogin')) {
                  return <Redirect path='/Signin' to='/LocationSearch'/>
                }
                return <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />}
                }
                />
              <Route path="/Signup" component={Signup} />
              <Route path="/LocationSearch" render={() => {
              if (cookie.load('isLogin')) {
                return <LocationSearch getUserInfo={this.getUserInfo} session={this.state} />
              }
              return <Redirect path='/LocationSearch' to='/Signin'/>
              //return <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />
              }}/>
              <Route path="/Weather" render={() => {
                if (cookie.load('isLogin')) {
                  return <Weather />
                }
                return <Redirect path='/Weather' to='/Signin'/>
                //return <Login loginHandler={this.loginHandler} getUserInfo={this.getUserInfo} />
                }}/>
            <Route path='/ChatApp' component={ChatApp}/>
        </Switch>
      </div>
    </Router>
  );
  }
}
export default App;