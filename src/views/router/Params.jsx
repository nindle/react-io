import React from 'react'
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom'
import './index.scss'
export default function Params () {
  const { name } = useParams()
  const router = useNavigate()

  const gorouterjs = () => {
    router('routerjs', {
      replace: false, state: {
        name: '我是编程式路由跳转过来的'
      }
    })
  }
  return (
    <div className="content" >
      <h2>{`我叫${name}今年18岁了`}</h2>
      <div className='navLink'>
        <button onClick={gorouterjs}>编程式路由跳转案例</button>
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
