import React, { Component } from 'react'

class HousesList extends Component {
  render() {
    const { houses, onEdit, onRemove } = this.props

    return (
      <>
        {houses.map((house, index) => (
          <div key={house.id}>
            {index + 1})
            {house.address}
            <button onClick={onEdit}>Редактировать</button>
            <button onClick={() => onRemove(house.id)}>Удалить</button>
          </div>
        ))}
      </>
    )
  }
}

export default HousesList
