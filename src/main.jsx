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
import Searchbar from "./components/searchbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Repos />,
    errorElement: <ErrPage />,
    children: [
      { 
        path: "repos/:repoId",
        element: <Repo />
      },
      {
        path: "search",
        element: <Searchbar />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);