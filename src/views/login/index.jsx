import React from 'react'
import './index.scss'
import { nanoid } from 'nanoid';


const Login = () => {
  if (sessionStorage.getItem('token')) return null

  const textNode = React.useRef()
  const password = React.useRef()
  const State = React.useState()
  const submit = () => {
    sessionStorage.setItem('token', nanoid())
    textNode.current.value = ''
    password.current.value = ''
    // console.log(props);
  }

  return (
    <div className="login">
      <div>账号: <input type="text" ref={textNode} className="text" placeholder='请输入账号' /></div>
      <div>密码: <input type="password" ref={password} className="password" placeholder='请输入密码' /></div>
      <button className="submit" onClick={submit}>登录</button>
    </div>
  )
}
export default Login
