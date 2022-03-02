import React, { Component } from 'react';
import List from '../../components/WeiboHotSearch/List';
import Search from '../../components/WeiboHotSearch/Search';
import './index.scss';
export default class WeiboHotSearch extends Component {
  state = {
    newsList: [],
  };
  getNewsList = (arr, type) => {
    let newArray = [];
    newArray = arr.map(item => {
      if (type === 'weibo') {
        item.title = item.word;
        return item;
      } else if (type === 'baidu') {
        let e = {};
        e.title = item;
        return e;
      }
    });
    this.setState({ newsList: newArray });
  };
  render() {
    return (
      <div className="WeiboHotSearch">
        <Search getNewsList={this.getNewsList} />
        <List list={this.state.newsList} />
      </div>
    );
  }
}
