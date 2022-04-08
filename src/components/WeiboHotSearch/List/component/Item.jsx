import React, { PureComponent } from 'react';

export default class Item extends PureComponent {
  render() {
    return (
      <div className="item">
        <div>{this.props.data.title}</div>
        <div>{this.props.data.host}</div>
      </div>
    );
  }
}
