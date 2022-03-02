import React, { Component } from 'react';
import Item from './component/Item';
import './index.scss';
export default class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.list.map((item, index) => {
          return <Item data={item} key={index} />;
        })}
      </div>
    );
  }
}
