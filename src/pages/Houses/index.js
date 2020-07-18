import React, { Component } from 'react'
import { uniqueId } from 'lodash'

import HousesForm from './HousesForm'
import HousesList from './HousesList'

class Houses extends Component {
  state = {
    houses: []
  }

  handleEdit = () => {

  }

  handleRemove = (id) => {
    this.setState({ houses: this.state.houses.filter(house => house.id !== id) })
  }

  handleAdd = (address) => {
    const newHouse = { id: uniqueId(), address }
    this.setState({ houses: [...this.state.houses, newHouse] })
  }

  render() {
    return (
      <>
        <HousesList
          houses={this.state.houses}
          onEdit={this.handleEdit}
          onRemove={this.handleRemove}
        />
        <HousesForm
          onAdd={this.handleAdd}
        />
      </>
    )
  }
}

export default Houses
