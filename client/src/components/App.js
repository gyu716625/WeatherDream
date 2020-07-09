/*global kakao*/ 
import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import { weather_API_KEY,  kakaoMap_API_KEY } from "../API_KEY";
import LocationSearch from './LocationSearch';
import Weather from './Weather';
import Login from "./login.component";
import SignUp from "./signup.component";
import MyPage from './MyPage';
import { Route, Switch } from "react-router-dom";

// 카카오 지도 api 연동  - 참고링크 : https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-2-%EC%95%B1%ED%82%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0
// openWeather api 연동 (key 발급) - 연동 완료

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
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
  }
  loginHandler(bool) {
    this.setState({
      isLogin: bool,
    });
  }
  getUserInfo() {
    fetch('http://localhost:4000/user', {
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
    const { isLogin, userInfo } = this.state;
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
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
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
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
      </div>
    );
  }
}
export default App;

