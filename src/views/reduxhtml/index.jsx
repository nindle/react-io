import React, { Component } from 'react'
import store from '../../redux/store'
import { addCount, removeCount } from '../../redux/count_action'

export default class Reduxhtml extends Component {

  add = () => {
    store.dispatch(addCount(1))
  }

  remove = () => {
    store.dispatch(removeCount(1))
  }

  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
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
