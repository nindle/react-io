import WeiboHotSearch from "../views/WeiboHotSearch";
import Todolist from "../views/todolist";
import Case from "../views/case";
import Params from "../views/router/Params.jsx";
import Search from "../views/router/Search.jsx";
import StateRouter from "../views/router/State.jsx";
import Demo from "../views/demo/demo.jsx";
import { Navigate } from "react-router-dom";

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
    ],
  },
  {
    path: "/demo",
    element: <Demo name="Nindle" />,
  },
  {
    path: "/paramsrouter/:name",
    element: <Params />,
  },
  {
    path: "/searchrouter",
    element: <Search />,
  },
  {
    path: "/stateRouter",
    element: <StateRouter />,
  },
];
