import React from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import './index.scss'
export default function Params () {
  const { name } = useParams()
  return (
    <div className="content" >
      <h2>{`我叫${name}今年18岁了`}</h2>
      <div className='navLink'>
        <NavLink to={`search?name=search`}>路由Search传参案例</NavLink>
        <NavLink to={`state`} state={{
          name: 'state',
          age: 18
        }}>
          路由State传参案例
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div >
  )
}
