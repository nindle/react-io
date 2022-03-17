import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import store from '../../redux/store'
import { addCount, removeCount } from '../../redux/actions/count'
import './index.scss'

export default class Reduxhtml extends Component {
  // 加法
  add = () => {
    store.dispatch(addCount(1))
  }
  // 减法
  remove = () => {
    store.dispatch(removeCount(1))
  }
  // 监听redux状态
  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
  }

  render () {
    return (
      <div>
        <h2>计算所得值：{store.getState()}</h2>
        <button onClick={this.add}> +1 </button>
        <button onClick={this.remove}> -1 </button>
        <NavLink className="react_redux" to={`reactRedux`}>React-redux写法案例</NavLink>
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}
