import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLogin: false
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ isLogin: true })
  }

  render() {
    return (
      <div>
        <h1>Вход</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder="Введите Email"/>
          <input value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Введите Password"/>
          <button type="submit">Войти</button>
        </form>

        {this.state.isLogin && <Redirect to="/houses" />}
      </div>
    )
  }
}

export default Login
