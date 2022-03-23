import React, { PureComponent } from 'react';
import List from '../../components/WeiboHotSearch/List';
import Search from '../../components/WeiboHotSearch/Search';
import './index.scss';
export default class WeiboHotSearch extends PureComponent {
  render () {
    return (
      <div className="WeiboHotSearch">
        <Search />
        <List />
      </div>
    );
  }
}
