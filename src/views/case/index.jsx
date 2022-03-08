import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './index.scss'
export default class Case extends Component {
  render () {
    return (
      <div>
        <div className='navcss'>
          <NavLink to='/case/todolist'>Todolist案例</NavLink>
          <NavLink to='/case/weiboHot'>WeiboHotSearch案例</NavLink>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}
