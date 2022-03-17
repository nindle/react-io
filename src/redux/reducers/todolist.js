const defaultTodoList = [
  { id: "001", name: "吃饭", done: true },
  { id: "002", name: "睡觉", done: true },
  { id: "003", name: "打代码", done: false },
  { id: "004", name: "搬砖", done: false },
  { id: "005", name: "逛街", done: false },
];

export default function count(oldValue = defaultTodoList, action) {
  const { type, data } = action;
  // 判断type类型
  switch (type) {
    case "add_todoitem":
      return [data, ...oldValue];
    default:
      return oldValue;
  }
}
