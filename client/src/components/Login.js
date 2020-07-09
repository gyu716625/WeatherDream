import React from 'react';
import { Link, Route, withRouter, Redirect } from 'react-router-dom';

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
      <div>
        <center>
          <h1>Sign In</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              fetch('http://localhost:3001/user/signin', {

                method: 'POST',
                body: JSON.stringify(this.state),
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((res) => {
                if (res.status === 200) {
                  this.props.loginHandler(true);  // 로그인 true 변경
                  this.props.getUserInfo();
                }
              });
            }}
          >
            <div>
            <label>Email address : </label>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                }}
                type="email"
                placeholder="Enter email"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
            <label>Password : </label>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                }}
                type="password"
                placeholder="Enter password"
                onChange={this.handleInputValue('password')}
              ></input>
            </div>
            <button
              style={{
                width: '200px',
                height: '30px',
                margin: '5px',
                borderRadius: '5px',
                backgroundColor: 'skyblue',
              }}
              type="submit"
            >
              Submit
            </button>
            <div>
              <Link to="/signup">Join Us</Link>
            </div>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);