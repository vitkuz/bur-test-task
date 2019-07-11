import React, { Component } from 'react';

export class RegisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    error: ''
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
    const username = e.target.elements.username.value;

    if (email && password && username) {
      console.log('Fake submit', { email, password, username });
    } else {
      this.setState({ error: 'Email, password, username are required!' });
    }
  };

  render() {

    const { email, password, username } = this.state;

    return (
      <div className={`page page-login`}>
        <h1>Login</h1>
        { this.state.error ? <p className={`error`}>{this.state.error}</p> : null }
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
export default RegisterPage;
