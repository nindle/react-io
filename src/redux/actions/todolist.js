export const addTodoItem = data => ({ type: "add_TodoItem", data });
export const removeTodoItem = data => ({ type: "remove_TodoItem", data });
export const changeTodoItem = data => ({ type: "change_TodoItem", data });
export const allTodoItem = data => ({ type: "all_TodoItem", data });