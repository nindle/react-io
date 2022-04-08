// import React, { PureComponent } from 'react';
import List from '../../components/HotSearch/List';
import Search from '../../components/HotSearch/Search';
import './index.scss';
// export default class HotSearch extends PureComponent {
//   render () {
//     return (
//       <div className="HotSearch">
//         <Search />
//         <List />
//       </div>
//     );
//   }
// }

import React from 'react';

const HotSearch = () => {
  return (
    <div className="HotSearch">
      <Search />
      <List />
    </div>
  );
};

export default HotSearch;
