import React, { Component } from 'react';
import List from '../../components/SearchGithub/List';
import Search from '../../components/SearchGithub/Search';
import './index.scss';
export default class SearchGithub extends Component {
  render() {
    return (
      <div className="searchGithub">
        <Search />
        <List />
      </div>
    );
  }
}
