import { combineReducers } from "redux";
import count from "./count";
import todolist from "./todolist";
export default combineReducers({
  count,
  todolist,
});
