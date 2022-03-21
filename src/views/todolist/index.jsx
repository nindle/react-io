import React, { Component } from 'react';
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

class App extends Component {
  //初始化状态
  state = {
    todonum: 0,
  };

  // 计算已完成数量
  footerUpdata = arr => {
    return arr.filter(e => {
      return e.done === true;
    }).length;
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header chenge={this.props.addTodoItem} />
          <List
            todos={this.props.todolist}
            chenge={this.props.changeTodoItem}
            del={this.props.removeTodoItem}
          />
          <Footer
            todos={this.props.todolist}
            todonum={`${this.footerUpdata(this.props.todolist)}`}
            chenge={this.props.allTodoItem}
            delete={this.props.delAllTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ todolist: state.todolist }), {
  addTodoItem,
  removeTodoItem,
  changeTodoItem,
  allTodoItem,
  delAllTodoItem,
})(App);
