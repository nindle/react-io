import React from 'react';
import { connect } from 'react-redux';
import {
  addTodoItem,
  removeTodoItem,
  changeTodoItem,
  allTodoItem,
  delAllTodoItem,
} from '../../redux/actions/todolist';
import Header from '../../components/todolist/Head';
import List from '../../components/todolist/List';
import Footer from '../../components/todolist/End';
import '../../assets/css/App.scss';

const App = props => {
  // 计算已完成数量
  const footerUpdata = arr => {
    return arr.filter(e => {
      return e.done === true;
    }).length;
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header chenge={props.addTodoItem} />
        <List todos={props.todolist} chenge={props.changeTodoItem} del={props.removeTodoItem} />
        <Footer
          todos={props.todolist}
          todonum={`${footerUpdata(props.todolist)}`}
          chenge={props.allTodoItem}
          delete={props.delAllTodoItem}
        />
      </div>
    </div>
  );
};

export default connect(state => ({ todolist: state.todolist }), {
  addTodoItem,
  removeTodoItem,
  changeTodoItem,
  allTodoItem,
  delAllTodoItem,
})(App);
