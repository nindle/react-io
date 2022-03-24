import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import './assets/css/App.scss';
import routes from './routes/index'
import Login from "../src/views/login";
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

const App = () => {
  const element = useRoutes(routes)
  const [token, setCount] = React.useState(null)

  React.useEffect(() => {
    setCount(token => sessionStorage.getItem('token'))
    return () => {
    }
    // 写[]表示调用一次，不写每次更新都会调用，[]里面写值表示监听值的变化
  }, [token])

  const onChange = (e) => {
    console.log(e);
  }

  return (
    <div>
      {
        sessionStorage.getItem('token') ?
          <div className="App" >
            <div className="navigation">
              <NavLink className="list-group-item" to="/case">
                组件练习案例
              </NavLink>

              <NavLink className="list-group-item" to={`/demo`}>
                生命周期案例
              </NavLink>

              <NavLink className="list-group-item" to={`/paramsrouter/ParamsNindle`}>
                路由案例
              </NavLink>

              <NavLink className="list-group-item" to={`/redux`}>
                redux案例
              </NavLink>
            </div>
            {/* 注册路由 */}
            <div className="views">
              {element}
            </div>
          </div> : <Provider value={onChange}> <Login /> </Provider>
      }
    </div>
  );
};
export default App;
