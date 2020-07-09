import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      isSignup: false,
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
      <div>
        <center>
          <h1>Sign Up</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let a = fetch('http://localhost:3001/user/signup', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Content-Type': 'application/json',
                },
              }).then((res) => {
                if (res.status === 200) {
                  alert('Membership. Please log in.');
                  this.setState({
                    isSignup: true,
                  });
                } else if (res.status === 409) {
                  alert('You are already registered.');
                }
              });
              console.log(a);
            }}
          >
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                }}
                type="email"
                placeholder="Please enter your e-mail"
                onChange={this.handleInputValue('email')}
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '400px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                }}
                onChange={this.handleInputValue('password')}
                type="password"
                placeholder="Please enter a password"
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: '195px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                }}
                onChange={this.handleInputValue('username')}
                placeholder="Name"
              ></input>
            </div>
            <div>
              <Link to="/login">Already have an ID?</Link>
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
          </form>
        </center>
      </div>
    );
  }
}

export default Signup;