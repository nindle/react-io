// import React, { PureComponent } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './index.scss';
// export default class Search extends PureComponent {
//   // 获取数据
//   search = async type => {
//     if (type === 'weibo') {
//       const { data } = await axios.get(`/weibo/ajax/side/hotSearch`);
//       // 发布订阅消息
//       PubSub.publish('newsList', data.data.realtime);
//     } else if (type === 'baidu') {
//       const { data } = await axios.post(`/baidu/api/BaiduHotSearch?hot=rt&qty=30`);
//       PubSub.publish('newsList', data.data.result);
//     } else if (type === 'zhihu') {
//       const { data } = await axios.post(`/v1/metawords/v2/account/login`, {
//         email: 'gjhjiahao@163.com',
//         password: 'MTIzNDU2',
//       });
//       PubSub.publish('newsList', data.data.result);
//     }
//   };

//   componentDidMount () {
//     this.search('weibo');
//   }

//   render () {
//     return (
//       <div className="search">
//         <button
//           ref={c => (this.buttonref = c)}
//           onClick={() => {
//             this.search('weibo');
//           }}
//         >
//           微博热搜
//         </button>
//         <button
//           onClick={() => {
//             this.search('baidu');
//           }}
//         >
//           百度热搜
//         </button>
//         <button
//           onClick={() => {
//             this.search('zhihu');
//           }}
//         >
//           知乎热搜
//         </button>
//       </div>
//     );
//   }
// }

import React from 'react';

const Search = () => {
  // 获取数据
  const search = async type => {
    if (type === 'weibo') {
      const { data } = await axios.get(`/weibo/ajax/side/hotSearch`);
      // 发布订阅消息
      PubSub.publish('newsList', data.data.realtime);
    } else if (type === 'baidu') {
      const { data } = await axios.post(`/baidu/api/BaiduHotSearch?hot=rt&qty=30`);
      console.log(data);
      PubSub.publish('newsList', data.data);
    } else if (type === 'zhihu') {
      const { data } = await axios.post(`/v1/metawords/v2/account/login`, {
        email: 'gjhjiahao@163.com',
        password: 'MTIzNDU2',
      });
      PubSub.publish('newsList', data.data.result);
    }
  };

  React.useEffect(() => {
    search('weibo');
  }, []);

  return (
    <div className="search">
      <button
        onClick={() => {
          search('weibo');
        }}
      >
        微博热搜
      </button>
      <button
        onClick={() => {
          search('baidu');
        }}
      >
        百度热搜
      </button>
      <button
        onClick={() => {
          search('zhihu');
        }}
      >
        知乎热搜
      </button>
    </div>
  );
};

export default Search;
