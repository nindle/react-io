import React, { PureComponent } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './index.scss';
export default class Case extends PureComponent {
  render() {
    return (
      <div>
        <div className="navcss">
          <NavLink to="/case/todolist">Todolist案例</NavLink>
          <NavLink to="/case/weiboHot">HotSearch案例</NavLink>
          <NavLink to="/case/fun">函数组件案例</NavLink>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
