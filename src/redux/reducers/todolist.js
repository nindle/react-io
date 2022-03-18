const defaultTodoList = [
  { id: "001", name: "吃饭", done: true },
  { id: "002", name: "睡觉", done: true },
  { id: "003", name: "打代码", done: false },
  { id: "004", name: "搬砖", done: false },
  { id: "005", name: "逛街", done: false },
];
export default function todolist (oldValue = defaultTodoList, action) {
  const { type, data } = action;
  // 判断type类型
  switch (type) {
    // 添加
    case "add_TodoItem":
      return [data, ...oldValue];
    // 删除
    case "remove_TodoItem":
      return oldValue.filter(e => {
        return e.id !== data;
      });
    // 选择
    case "change_TodoItem":
      console.log(oldValue.map(e => {
        return e.id === data ?
          {
            id: e.id,
            name: e.name,
            done: !e.done,
          } : e
      }));
      return oldValue.map(e => {
        return e.id === data ?
          {
            id: e.id,
            name: e.name,
            done: !e.done,
          } : e
      });
    // 全选
    case "all_TodoItem":
      console.log(oldValue.map(e => {
        return {
          id: e.id,
          name: e.name,
          done: data
        }
      }));
      return oldValue.map(e => {
        return {
          id: e.id,
          name: e.name,
          done: data
        }
      });
    default:
      return oldValue;
  }
}
