import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function LoginForm({ setAuth, setUser }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [message, setMessage] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const content = await response.json();
      const user2 = content.data;

      console.log(content);

      if (content.status == "error") {
        setMessage(content.message);
      } else {
        if (user2.verified == 'Verified') {
          setAuth(content.status)
          setUser(user2);
          if (user2.role == "admin") {
            navigate("/admin/dashboard", { state: { notif: true } });
          } else {
            navigate("/", { state: { notif: true } });
          }
        } else {
          const logout = await axios.post('http://localhost:8000/api/auth/logout', {}, {
            withCredentials: true,
          })
          const status = logout.status
          
          if (status == 200) {
            setUser("")
            setAuth("unauthorized")
            console.log('not verified');
            toast.success("Akun Kamu Belum Disetujui Admin!", {
              position: "top-center",
            })
            return <Navigate to={'/auth/login'}/>
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("http://localhost:8000/api/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });

  //   setRedirect(true)
  //   const content = await response.json();
  //   setUser(content.data)
  //   console.log(content.data);

  // };

  // if (redirect) {
  //   navigate('/admin/dashboard')
  // }

  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <ToastContainer/>
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Welcome Back!
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-1 sm:mb-2">
            { message ? 
            <h3 className="text-red-500 font-semibold">{'*' + message}</h3>
            : '' }
            <label htmlFor="username" className="inline-block mb-1 font-medium">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="AlanPratama"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="password" className="inline-block mb-1 font-medium">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            Don't Have An Account?{" "}
            <Link
              to={"/auth/register"}
              className="text-deep-purple-accent-700 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
