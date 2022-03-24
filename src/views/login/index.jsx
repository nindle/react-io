import React from 'react'
import './index.scss'
const Login = () => {
  const textNode = React.useRef()
  const password = React.useRef()

  const submit = () => {
    sessionStorage.setItem('text', textNode.current.value)
    sessionStorage.setItem('password', password.current.value)
    alert('登录成功')
    textNode.current.value = ''
    password.current.value = ''
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
