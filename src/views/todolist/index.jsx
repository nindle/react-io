import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodoItem,
  removeTodoItem,
  changeTodoItem,
  allTodoItem,
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

  addTodo = e => {
    this.props.addTodoItem(e);
  };

  footerUpdata = arr => {
    //已完成的个数
    return arr.filter(e => {
      return e.done === true;
    }).length;
  };

  deleteDotos = e => {
    // this.setState({ todos: e }, () => {
    //   this.footerUpdata();
    // });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header chenge={this.addTodo} />
          <List
            todos={this.props.todolist}
            chenge={this.props.changeTodoItem}
            del={this.props.removeTodoItem}
          />
          <Footer
            todos={this.props.todolist}
            todonum={`${this.footerUpdata(this.props.todolist)}`}
            chenge={this.props.allTodoItem}
            delete={this.props.removeTodoItem}
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
})(App);
