import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import NewQuery from "./pages/NewQuery/NewQuery.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  { path: "/app", element: <App /> },
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/newq", element: <NewQuery /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
