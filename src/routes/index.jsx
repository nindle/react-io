import { Navigate } from "react-router-dom";
import WeiboHotSearch from "../views/WeiboHotSearch";
import Todolist from "../views/todolist";
import Fun from "../views/fun";
import Case from "../views/case";
import Params from "../views/router/Params.jsx";
import Search from "../views/router/Search.jsx";
import StateRouter from "../views/router/State.jsx";
import Routerjs from "../views/router/router.jsx";
import Demo from "../views/demo/demo.jsx";
import Reduxhtml from "../views/reduxhtml";
import Reactredux from "../views/reduxhtml/react-redux";

export default [
  {
    path: "/",
    element: <Navigate to="/demo" />,
  },
  {
    path: "/case",
    element: <Case />,
    children: [
      {
        path: "",
        element: <Navigate to="todolist" />,
      },
      {
        path: "todolist",
        element: <Todolist />,
      },
      {
        path: "weiboHot",
        element: <WeiboHotSearch />,
      },
      {
        path: "fun",
        element: <Fun />,
      },
    ],
  },
  {
    path: "/demo",
    element: <Demo name="Nindle" />,
  },
  {
    path: "/paramsrouter/:name",
    element: <Params />,
    children: [
      {
        path: "",
        element: <Navigate to="search?name=search" />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "state",
        element: <StateRouter />,
      },
      {
        path: "routerjs",
        element: <Routerjs />,
      },
    ],
  },
  {
    path: "/redux",
    element: <Reduxhtml />,
    children: [{ path: "reactRedux", element: <Reactredux /> }],
  },
];
