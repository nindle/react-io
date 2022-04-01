// import React, { PureComponent } from 'react';
import './index.scss';

// export default class End extends PureComponent {
//   onChecks = () => {
//     const { todos, todonum } = this.props;
//     if (todonum == todos.length) {
//       this.props.chenge(false);
//     } else {
//       this.props.chenge(true);
//     }
//   };

//   deleteDoto = () => {
//     this.props.delete();
//   };

//   render() {
//     const { todos, todonum } = this.props;
//     return (
//       <div className="todo-footer">
//         <label>
//           <input
//             type="checkbox"
//             checked={todonum == todos.length && todos.length !== 0}
//             onChange={this.onChecks}
//           />
//         </label>
//         <span>
//           <span>已完成 {todonum}</span> / 全部 {todos.length}
//         </span>
//         <button className="btn btn-danger show" onClick={this.deleteDoto}>
//           清除已完成任务
//         </button>
//       </div>
//     );
//   }
// }

import React from 'react';

const index = props => {
  const { todos, todonum } = props;

  const onChecks = () => {
    if (todonum == todos.length) {
      props.chenge(false);
    } else {
      props.chenge(true);
    }
  };

  const deleteDoto = () => {
    props.delete();
  };

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={todonum == todos.length && todos.length !== 0}
          onChange={onChecks}
        />
      </label>
      <span>
        <span>已完成 {todonum}</span> / 全部 {todos.length}
      </span>
      <button className="btn btn-danger show" onClick={deleteDoto}>
        清除已完成任务
      </button>
    </div>
  );
};

export default index;
