import { Routes, Route, Link } from 'react-router-dom';
// import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
// import Dome from "./views/demo";
import Todolist from "./views/todolist";
import WeiboHotSearch from "./views/WeiboHotSearch";

const App = () => {
  return (
    <div className="App">
      {/* 注册路由 */}
      <div>
        <Routes>
          <Route path="/todolist" component={Todolist} />
          <Route path="/weiboHotSearch" component={WeiboHotSearch} />
        </Routes>
      </div>
      <div>
        <Link className="list-group-item" to="/todolist">Todolist</Link>
        <Link className="list-group-item" to="/weiboHotSearch">WeiboHotSearch</Link>
      </div>
    </div>
  );
};
export default App;
