import React, { PureComponent } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Head extends PureComponent {
  onKeyDown = e => {
    if (e.keyCode !== 13) {
      return;
    } else if (e.target.value.trim() !== '') {
      const item = {
        id: nanoid(),
        name: e.target.value,
        done: false,
      };
      this.props.chenge(item);
      e.target.value = '';
    }
  };

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
