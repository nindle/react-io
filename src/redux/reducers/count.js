const defaultCount = 0;
export default function count(oldValue = defaultCount, action) {
  const { type, data } = action;
  // 判断type类型
  switch (type) {
    case "add":
      return oldValue + data;
    case "remove":
      return oldValue - data;
    default:
      return oldValue;
  }
}
