import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
export default class Search extends Component {
  // https://weibo.com/ajax/side/hotSearch
  search = type => {
    if (type === 'weibo') {
      axios.get(`/weibo/ajax/side/hotSearch`).then(
        response => {
          this.props.getNewsList(response.data.data.realtime, 'weibo');
        },
        error => {
          console.log(error);
        }
      );
    } else if (type === 'baidu') {
      // http://s.api.enetapi.com/api/BaiduHotSearch?hot=rt&qty=30
      axios.post(`/baidu/api/BaiduHotSearch?hot=rt&qty=30`).then(
        response => {
          // console.log(response.data.data.result);
          this.props.getNewsList(response.data.data.result, 'baidu');
        },
        error => {
          console.log(error);
        }
      );
    }
  };

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.search('weibo');
          }}
        >
          微博热搜
        </button>
        <button
          onClick={() => {
            this.search('baidu');
          }}
        >
          百度热搜
        </button>
        <button
          onClick={() => {
            this.search('zhihu');
          }}
        >
          知乎热搜
        </button>
      </div>
    );
  }
}
