import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Register extends Component {
  state = {
    lastName: '',
    firstName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    isRegister: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ isRegister: true })
  }

  render() {
    return (
      <div>
        <h1>Регистрация</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Введите фамилию" />
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Введите имя" />
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Введите телефон" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Введите пароль" />
          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Повторите пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>

        {this.state.isRegister && <Redirect to="/houses" />}
      </div>
    )
  }
}

export default Register
