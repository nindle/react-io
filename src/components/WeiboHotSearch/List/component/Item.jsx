import React, { PureComponent } from 'react';

export default class Item extends PureComponent {
  render() {
    return (
      <a className="item" href={this.props.data.url} target="_blank">
        <div>{this.props.data.title}</div>
        <div>{this.props.data.host}</div>
      </a>
    );
  }
}
