// import React, { PureComponent } from 'react';
import './index.css';

// export default class Item extends PureComponent {
//   onChecks = () => {
//     const { id, chenge } = this.props;
//     chenge(id, 'checked');
//   };

//   deleteTodo = () => {
//     const { id, chenge } = this.props;
//     chenge(id, 'delete');
//   };

//   render () {
//     const { name, done } = this.props;
//     return (
//       <li>
//         <label>
//           <input type="checkbox" checked={done} onChange={this.onChecks} />
//           <span> {name}</span>
//         </label>
//         <button
//           className={done ? 'btn btn-danger  show' : 'btn btn-danger'}
//           onClick={this.deleteTodo}
//         >
//           删除
//         </button>
//       </li>
//     );
//   }
// }

import React from 'react';

const Item = props => {
  const { name, done, id, chenge } = props;

  const onChecks = () => {
    chenge(id, 'checked');
  };

  const deleteTodo = () => {
    chenge(id, 'delete');
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onChecks} />
        <span> {name}</span>
      </label>
      <button className={done ? 'btn btn-danger  show' : 'btn btn-danger'} onClick={deleteTodo}>
        删除
      </button>
    </li>
  );
};

export default Item;
