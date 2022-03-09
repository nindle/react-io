import WeiboHotSearch from "../views/WeiboHotSearch";
import Todolist from "../views/todolist";
import Case from "../views/case";
import Demo from "../views/demo/demo.jsx";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/",
    element: <Navigate to="/demo/Nindle" />,
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
  // {
  //   path: "/demo/:name",
  //   element: <Demo />,
  // },

  // useSearch写法,
  {
    path: "/demo",
    element: <Demo />,
  },
];
