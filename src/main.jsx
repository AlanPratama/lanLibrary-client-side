import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/homepage.jsx";
import Login from "./Pages/Auth/login.jsx";
import Register from "./Pages/Auth/register.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import Dashboard from "./Pages/Admin/dashboard.jsx";
import Book from "./Pages/Admin/Book/book.jsx";
import Error from "./Pages/Error/Error.jsx";
import BookDetail from "./Pages/book/bookDetail.jsx";
import axios from 'axios';
import UserLayout from "./Layouts/UserLayout.jsx";
import "./index.css";
import User from "./Pages/Admin/User/user.jsx";
import Type from "./Pages/Admin/Type/type.jsx";
import Category from "./Pages/Admin/Category/category.jsx";


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

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout isActive="login" auth={auth} setAuth={setAuth} user={user} setUser={setUser} ><Homepage /></UserLayout>} />
          <Route path="/book-detail/:slug" element={<BookDetail />} />

          <Route path="/auth/login" element={<GuestMiddleware element={<Login setAuth={setAuth} setUser={setUser} />} />} />
          <Route path="/auth/register" element={<GuestMiddleware element={<Register />} />} />


          {/* ONLY OFFICER */}
          <Route path="/admin/dashboard" element={<OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="dashboard"><Dashboard/></AdminLayout>} />} />

          <Route path="/admin/books" element={<OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="books"><Book/></AdminLayout>} />} />
          <Route path="/admin/type" element={<OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="type"><Type/></AdminLayout>} />} />
          <Route path="/admin/category" element={<OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="category"><Category/></AdminLayout>} />} />


          
          <Route path="/admin/users" element={<OnlyLibManager element={<AdminLayout setAuth={setAuth} setUser={setUser} bgMenu="users"><User/></AdminLayout>} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// Render the app using createRoot
root.render(<App />);

export default App;
