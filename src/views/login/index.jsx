import React from 'react'
import './index.scss'
const Login = () => {

  return (
    <div className="login">
      <div>账号: <input type="text" className="text" placeholder='请输入账号' /></div>
      <div>密码: <input type="password" className="password" placeholder='请输入密码' /></div>
      <button className="submit">登录</button>
    </div>
  )
}
export default Login
