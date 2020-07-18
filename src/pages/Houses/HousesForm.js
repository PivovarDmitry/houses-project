import React, { Component } from 'react'

class HousesForm extends Component {
  state = {
    isAdd: false,
    address: ''
  }

  handleOpen = () => {
    this.setState({ isAdd: true })
  }

  handleClose = () => {
    this.setState({ isAdd: false })
  }

  handleChange = (event) => {
    this.setState({ address: event.target.value })
  }

  handleAdd = () => {
    this.props.onAdd(this.state.address)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>Добавить</button>

        {this.state.isAdd &&
          <form>
            <input value={this.state.address} onChange={this.handleChange} type="text" placeholder="Введите адрес" />
            <button type="button" onClick={this.handleAdd}>Сохранить</button>
            <button type="button" onClick={this.handleClose}>Закрыть</button>
          </form>
        }
      </div>
    )
  }
}

export default HousesForm
