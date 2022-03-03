import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <div>{this.props.data?.word ?? this.props.data}</div>
        <div>{this.props.data.raw_hot}</div>
      </div>
    );
  }
}
