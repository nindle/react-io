import { Routes, Route, Link, Navigate } from 'react-router-dom';
// import logo from "./assets/images/logo.svg";
import './assets/css/App.scss';
import Dome from './views/demo';
import Todolist from './views/todolist';
import WeiboHotSearch from './views/WeiboHotSearch';

const App = () => {
  return (
    <div className="App">
      <div className="navigation">
        <Link className="list-group-item" to="/todolist">
          Todolist案例
        </Link>
        <Link className="list-group-item" to="/routeweibo">
          热搜接口案例
        </Link>
        <Link className="list-group-item" to="/demo">
          Demo案例
        </Link>
      </div>
      {/* 注册路由 */}
      <div className="views">
        <Routes>
          <Route path="/" element={<Navigate to="/todolist" />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/demo" element={<Dome />} />
          <Route path="/routeweibo" element={<WeiboHotSearch />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
