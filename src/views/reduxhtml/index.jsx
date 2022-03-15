import React, { Component } from 'react'
import store from '../../redux/store'

export default class Reduxhtml extends Component {

  add = () => {
    store.dispatch({ type: 'add', data: 1 })
  }

  remove = () => {
    store.dispatch({ type: 'remove', data: 1 })
  }

  render () {
    return (
      <div>
        <h2>计算所得值：{store.getState()}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.remove}>-1</button>
      </div>
    )
  }
}
