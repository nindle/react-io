import { NavLink, useRoutes } from 'react-router-dom';
import './assets/css/App.scss';
import routes from './routes/index'

const App = () => {
  const element = useRoutes(routes)
  return (
    <div className="App">
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
    </div>
  );
};
export default App;
