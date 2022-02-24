import React, { Component } from 'react';
import './index.css';

export default class End extends Component {
  onChecks = () => {
    const { todos, todonum } = this.props;
    if (todonum !== todos.length) {
      this.props.chenge(true);
    } else {
      this.props.chenge(false);
    }
  };

  deleteDoto = () => {
    const { todos } = this.props;
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done;
    });
    //更新状态
    this.props.delete(newTodos);
  };

  render() {
    const { todos, todonum } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={todonum === todos.length && todos.length !== 0}
            onChange={this.onChecks}
          />
        </label>
        <span>
          <span>已完成 {todonum}</span> / 全部 {todos.length}
        </span>
        <button className="btn btn-danger show" onClick={this.deleteDoto}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
