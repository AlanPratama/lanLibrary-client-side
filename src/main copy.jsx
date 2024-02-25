import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/homepage.jsx";
import Login from "./Pages/Auth/login.jsx";
import Register from "./Pages/Auth/register.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import Dashboard from "./Pages/Admin/dashboard.jsx";
import Book from "./Pages/Admin/Book/book.jsx";
import Error from "./Pages/Error/Error.jsx";
import BookDetail from "./Pages/book/bookDetail.jsx";
import axios from 'axios';
import UserLayout from "./Layouts/UserLayout.jsx";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState("unauthorized");

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8000/api/user', { withCredentials: true });
      console.log(response.data);
      const content = response.data;
      setUser(content.data);
      setAuth(content.status)
      console.log('User:' + user);
    })();
  }, []);

  const GuestMiddleware = ({ element }) => {
    if (auth == 'success') {
      
      if (user.role == 'user') {
        return <Navigate to={'/'} />
      } else {
        return <Navigate to={'/admin/dashboard'} />
      }
    } else {
      return element
    }
  }

  const AuthMiddleware = ({ element }) => {
    if (auth == 'success') {
      return element;
    } else {
      return <Navigate to={'/auth/login'} />
    }
  }

  const OnlyLibManager = ({ element }) => {
    if (auth == 'success' && user.role != 'user') {
      return element
    } else {
      return <Navigate to={'/auth/login'} />
    }
  }

  const router = createBrowserRouter([

    // USER || USER || USER || USER || USER || USER || USER || USER
    {
      path: "/",
      element: <UserLayout isActive="login" ><Homepage /></UserLayout>,
      errorElement: <Error />,
    },

    {
      path: "/book-detail/slug",
      element: <BookDetail />,
    },



    // AUTH || AUTH || AUTH || AUTH || AUTH || AUTH
    {
      path: "/auth/login",
      element: <GuestMiddleware element={<Login setAuth={setAuth} setUser={setUser} /> } />,
    },
    {
      path: "/auth/register",
      element: <GuestMiddleware element={<Register />} />,
    },


    // ADMIN || ADMIN || ADMIN || ADMIN || ADMIN || ADMIN
    {
      path: "/admin/dashboard",
      element: <OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="dashboard" ><Dashboard/></AdminLayout>} /> ,
    },
    {
      path: "/admin/book",
      element: <OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} ><Book/></AdminLayout>} /> ,
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
