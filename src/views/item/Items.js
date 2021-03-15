import React, { Component } from 'react'
import Item from './Item'
export default class Items extends Component {
  render() {
    let items = this.props.data.map( (item) => {
              return <Item key={item.id} data={item} />
    })
    return (
      <div>
        {items}
      </div>
    )
  }
}
