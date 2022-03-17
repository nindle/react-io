import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { addCount, removeCount } from '../../redux/actions/count'

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
        <h2>计算所得值：{this.props.count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.remove}>-1</button>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state.count }),
  {
    addCount,
    removeCount
  }
)(Reduxhtml)

