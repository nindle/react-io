import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

export default class Head extends Component {
  onKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return
    } else {
      const item = {
        id: nanoid(),
        name: e.target.value,
        done: false
      }
      this.props.chenge(item);
      e.target.value = ''
    }
  }
  render () {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyDown={this.onKeyDown}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
