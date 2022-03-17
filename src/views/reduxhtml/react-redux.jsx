import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { addCount, removeCount } from '../../redux/count_action'

class Reduxhtml extends Component {
  // 加法
  add = () => {
    this.props.addCount(1)
  }
  // 减法
  remove = () => {
    this.props.removeCount(1)
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

export default connect(
  state => ({ count: state }),
  {
    addCount,
    removeCount
  }
)(Reduxhtml)

