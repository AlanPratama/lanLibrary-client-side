import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Auth/login.jsx";
import Register from "./Pages/Auth/register.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import Dashboard from "./Pages/Admin/dashboard.jsx";
import Book from "./Pages/Admin/Book/book.jsx";
import Error from "./Pages/Error/Error.jsx";
import BookDetail from "./Pages/book/bookDetail.jsx";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      console.log(content);
      setUser(content.data);
    })();
  }, []);

  const router = createBrowserRouter([

    // USER || USER || USER || USER || USER || USER || USER || USER
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Error />,
    },

    {
      path: "/book-detail/slug",
      element: <BookDetail />,
    },



    // AUTH || AUTH || AUTH || AUTH || AUTH || AUTH
    {
      path: "/auth/login",
      element: <Login user={user} setUser={setUser} />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },


    // ADMIN || ADMIN || ADMIN || ADMIN || ADMIN || ADMIN
    {
      path: "/admin/dashboard",
      element: <Dashboard user={user} setUser={setUser} />,
    },
    {
      path: "/admin/book",
      element: <Book />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

// Render the app directly
root.render(<App />);

export default App;
