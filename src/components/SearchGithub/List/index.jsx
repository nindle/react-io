import React, { Component } from 'react';
import Item from './component/Item';
import './index.scss';
export default class List extends Component {
  render() {
    return (
      <div className="list">
        {[1, 2, 3, 4, 5, 6].map(item => {
          return <Item data={item} />;
        })}
      </div>
    );
  }
}
