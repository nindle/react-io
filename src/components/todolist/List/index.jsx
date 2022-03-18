import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class List extends Component {
  changeShow = (id, e) => {
    if (e === 'delete') {
      this.props.del(id);
    } else if (e === 'checked') {
      this.props.chenge(id);
    }
  };

  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => {
          return <Item key={todo.id} {...todo} chenge={this.changeShow} />;
        })}
      </ul>
    );
  }
}
