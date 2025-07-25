import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/index.css";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import NotFound from "../components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/my-portfolio/",
    element: <App />,
    children: [
      {
        path: "/my-portfolio/",
        element: <Home />,
      },
      {
        path: "/my-portfolio/about",
        element: <About />,
      },
      {
        path: "/my-portfolio/projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
