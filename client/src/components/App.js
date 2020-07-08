import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import { Mypage } from './MyPage';

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

