// import React, { PureComponent } from 'react';
import Item from './component/Item';
import PubSub from 'pubsub-js';
import './index.scss';
// export default class List extends PureComponent {
//   state = {
//     newsList: [],
//   };

//   componentDidMount() {
//     // 订阅消息
//     this.token = PubSub.subscribe('newsList', (_, data) => {
//       this.setState({ newsList: data });
//     });
//   }

//   componentWillUnmount() {
//     // 取消订阅
//     PubSub.unsubscribe(this.token);
//   }

//   render() {
//     return (
//       <div className="list">
//         {this.state.newsList.map((item, index) => {
//           return <Item data={item} key={index} />;
//         })}
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';

const List = () => {
  const [newsList, setNewsList] = useState([]);

  React.useEffect(() => {
    const token = PubSub.subscribe('newsList', (_, data) => {
      console.log(data);
      const newList = data.map(e => {
        return {
          title: e?.title,
          url: e?.link,
          host: e?.heat,
        };
      });
      setNewsList(newList);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return (
    <div className="list">
      {newsList.map((item, index) => {
        return <Item data={item} key={index} />;
      })}
    </div>
  );
};

export default List;
