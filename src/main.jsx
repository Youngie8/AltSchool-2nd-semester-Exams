import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrPage from "./components/errPage";
import Repos from "./components/repos";
import Repo from "./components/repo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Repos />,
    errorElement: <ErrPage />,
    children: [
      { 
        path: "repos/:name",
        element: <Repo />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);