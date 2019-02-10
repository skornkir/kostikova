import React, { Component } from 'react';
import './login.scss'

class Login extends Component{

  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="logo"/>
          <div className="title">
            <h3>Войти</h3>
          </div>
          <form>
            <input className="form-control" type="text" placeholder="Телефон" name="phone"/>
            <input className="form-control" type="password" placeholder="Пароль" name="password" />
            <button className="btn" type="submit" >Войти</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login;
