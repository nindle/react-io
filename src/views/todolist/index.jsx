import React, { Component } from 'react';
import Header from '../../components/todolist/Head';
import List from '../../components/todolist/List';
import Footer from '../../components/todolist/End';
import '../../assets/css/App.scss';

export default class App extends Component {
  //初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '搬砖', done: false },
      { id: '005', name: '逛街', done: false },
    ],
    todonum: 0,
  };

  addTodo = e => {
    const { todos } = this.state;
    const newTodo = [e, ...todos];
    this.setState({ todos: newTodo });
  };

  updataChecked = e => {
    this.footerUpdata();
    this.setState({ todos: [...e] });
  };

  footerUpdata = () => {
    const { todos } = this.state;
    //已完成的个数
    let newNum = 0;
    todos.forEach(item => {
      if (item.done) {
        newNum += 1;
      }
    });
    this.setState({ todonum: newNum });
  };

  componentDidMount() {
    this.footerUpdata();
  }

  chengeFooter = e => {
    const { todos } = this.state;
    if (e) {
      const newtodos = todos.map(item => {
        item.done = true;
        return item;
      });
      this.setState({ todos: newtodos });
    } else {
      const newtodos = todos.map(item => {
        item.done = false;
        return item;
      });
      this.setState({ todos: newtodos });
    }
    this.footerUpdata();
  };

  deleteDotos = e => {
    this.setState({ todos: e }, () => {
      this.footerUpdata();
    });
  };

  render() {
    const { todos, todonum } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header chenge={this.addTodo} />
          <List todos={todos} chenge={this.updataChecked} />
          <Footer
            todos={todos}
            todonum={todonum}
            chenge={this.chengeFooter}
            delete={this.deleteDotos}
          />
        </div>
      </div>
    );
  }
}
