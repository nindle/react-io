import count from "./count";
import todolist from "./todolist";
import { combineReducers } from "redux";

export default combineReducers({
  count,
  todolist,
});
