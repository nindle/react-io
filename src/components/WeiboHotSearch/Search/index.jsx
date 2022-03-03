import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './index.scss';
export default class Search extends Component {
  // 获取数据
  search = async type => {
    if (type === 'weibo') {
      const { data } = await axios.get(`/weibo/ajax/side/hotSearch`);
      // 发布订阅消息
      PubSub.publish('newsList', data.data.realtime);
    } else if (type === 'baidu') {
      const { data } = await axios.post(`/baidu/api/BaiduHotSearch?hot=rt&qty=30`);
      PubSub.publish('newsList', data.data.result);
    }
  };

  render() {
    return (
      <div className="search">
        <button
          ref={c => (this.buttonref = c)}
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
