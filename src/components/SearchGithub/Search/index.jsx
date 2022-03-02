import React, { Component } from 'react';
import './index.scss';
export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="请输入..." />
        <button>点击搜索</button>
      </div>
    );
  }
}
