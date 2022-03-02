import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.data} alt={this.props.data} />
      </div>
    );
  }
}
