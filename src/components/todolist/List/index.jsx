// import React, { PureComponent } from 'react';
import Item from '../Item';
import './index.css';

// export default class List extends PureComponent {
//   changeShow = (id, e) => {
//     if (e === 'delete') {
//       this.props.del(id);
//     } else if (e === 'checked') {
//       this.props.chenge(id);
//     }
//   };

//   render() {
//     const { todos } = this.props;
//     return (
//       <ul className="todo-main">
//         {todos.map(todo => {
//           return <Item key={todo.id} {...todo} chenge={this.changeShow} />;
//         })}
//       </ul>
//     );
//   }
// }

import React from 'react';

export default function List(props) {
  const changeShow = (id, e) => {
    if (e === 'delete') {
      props.del(id);
    } else if (e === 'checked') {
      props.chenge(id);
    }
  };

  return (
    <ul className="todo-main">
      {props.todos.map(todo => {
        return <Item key={todo.id} {...todo} chenge={changeShow} />;
      })}
    </ul>
  );
}
