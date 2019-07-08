import React, { Component } from 'react';

class RegisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  changeField = (e) => {
    const value = e.target.value;
    const name = e.target.getAttribute("name");

    // console.log(e.target.getAttribute("name"));

    this.setState({ [name]: value });
  };

  submitForm = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log('Fake submit', { email, password });
  };

  render() {

    const { email, password, username } = this.state;

    return (
      <div className={`page page-login`}>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <input type="text" name="username" className="form-control" placeholder="Your Username *" value={username} onChange={this.changeField} autoFocus={true}/>
          </div>
          <div className="form-group">
            <input type="text" name="email" className="form-control" placeholder="Your Email *" value={email} onChange={this.changeField} autoFocus={true}/>
          </div>
          <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Your Password *" value={password} onChange={this.changeField} autoComplete={`off`}/>
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Register"/>
          </div>
        </form>
      </div>
    )
  }
};
export default {
  component: RegisterPage
};
