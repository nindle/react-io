import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  changeShow = (id, e) => {
    if (e === 'delete') {
      this.props.todos.forEach((todo, index, list) => {
        if (id === todo.id) {
          list.splice(index, 1);
        }
      });
      this.props.chenge(this.props.todos);
    } else if (e === 'checked') {
      this.props.todos.forEach(todo => {
        if (id === todo.id) {
          todo.done = !todo.done;
        }
      });
      this.props.chenge(this.props.todos);
    }
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} chenge={this.changeShow} />;
        })}
      </ul>
    );
  }
}
