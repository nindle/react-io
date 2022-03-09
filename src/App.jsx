import { NavLink, useRoutes } from 'react-router-dom';
import './assets/css/App.scss';
import routes from './routes/index'

const App = () => {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <div className="navigation">
        <NavLink className="list-group-item" to="/case">
          练习案例
        </NavLink>

        <NavLink className="list-group-item" to={`/demo`}>
          生命周期案例
        </NavLink>

        <NavLink className="list-group-item" to={`/paramsrouter/ParamsNindle`}>
          路由Params传参案例
        </NavLink>

        <NavLink className="list-group-item" to={`/searchrouter?name=SearchNindle`}>
          路由Search传参案例
        </NavLink>

        <NavLink className="list-group-item" to={`/StateRouter`} state={{
          name: 'Nindle',
          age: '18'
        }}>
          路由State传参案例
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
