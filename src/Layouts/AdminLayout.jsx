import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

export default function AdminLayout({ children, bgMenu, setAuth, setUser}) {
  const logout = async () => {
    // e.preventDefault();

    try {
      // await fetch("http://localhost:8000/api/auth/logout", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   credentials: "include",
      // });
      const response = await axios.post('http://localhost:8000/api/auth/logout', {}, {
        withCredentials: true
      });
      const status = response.status;
      console.log(status);
      if (status == 200) {
        setUser("");
        setAuth("unauthorized")
        return <Navigate to={'/auth/login'} />
      }


    } catch (error) {
      console.error(error);
    }
  };



  const [rentlogs, setRentlogs] = useState(false)
  const [arrowRent, setArrowRent] = useState(false)

  const [sidebar, setSidebar] = useState(false);

  function dropdown() {
    if (rentlogs == false) {
      setRentlogs(true)
    } else {
      setRentlogs(false)
    }
    {!arrowRent ?  setArrowRent(true) : setArrowRent(false) }
  }

  function openSidebar() {
    {!sidebar ? setSidebar(true) : setSidebar(false)}
  }

  return (
    <>
    <span
      className="absolute text-gray-700 text-4xl top-5 left-4 cursor-pointer"
      onClick={openSidebar}
    >
      <i className="bi bi-filter-left px-2 bg-white rounded-md"></i>
    </span><p className="text-gray-700">X</p>
    <div
      className={`sidebar ${sidebar ? 'hidden' : ''} fixed top-0 bottom-0 lg:left-0 p-2 w-[230px] overflow-y-auto text-center bg-white shadow-xl`}
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <img src="/assets/lanLib-lg.png" alt="" className="w-7" />
          <h1 className="font-bold text-gray-800 text-[22px] ml-2"><span className="text-deep-purple-accent-400">L</span>an <span className="text-deep-purple-accent-400">L</span>ibrary</h1>
          <p className="text-gray-700 cursor-pointer  lg:hidden" onClick={openSidebar}>X</p>

        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <Link to={"/admin/dashboard"}
        className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${bgMenu == 'dashboard' ? 'bg-deep-purple-accent-400 text-white' : 'hover:text-deep-purple-400 text-gray-700'}`}
      >
        <i className="fa-solid fa-chart-pie"></i>
        <span className="text-[15px] ml-4 font-bold">Dashboard</span>
      </Link>

      <div
        className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${bgMenu == 'rentLogs' ? 'bg-deep-purple-accent-400 text-white' : 'hover:text-deep-purple-400 text-gray-700'}`}
        onClick={dropdown}
      >
        <i className={`fa-solid fa-clipboard-list ${rentlogs ? 'text-deep-purple-accent-400' : ''}`}></i>
        <div className="flex justify-between w-full items-center">
          <span className={`text-[15px] ml-4 font-bold ${rentlogs ? 'text-deep-purple-accent-400' : ''}`}>Rent Logs</span>
          <span className={`text-sm ${!arrowRent ? 'rotate-180 -mt-2' : 'rotate-0 text-deep-purple-accent-400' }`} id="arrowRent">
            <i className="fa-solid fa-chevron-up"></i>
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col justify-start items-start text-left text-sm mt-1 w-4/5 mx-auto text-gray-700 font-bold ${!rentlogs ? 'hidden' : ''}`}
        id="rentlogs"
      >
        <Link to={"/admin/dashboard"} className="cursor-pointer p-2 hover:text-deep-purple-400 rounded-md mt-1">
          Need Verification
        </Link>
        <Link to={"/admin/dashboard"} className="cursor-pointer p-2 hover:text-deep-purple-400 rounded-md mt-1">
          Personal
        </Link>
        <Link to={"/admin/dashboard"} className="cursor-pointer p-2 hover:text-deep-purple-400 rounded-md mt-1">
          Friends
        </Link>
      </div>

      <Link to={"/admin/books"}
        className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${bgMenu == 'books' ? 'bg-deep-purple-accent-400 text-white' : 'hover:text-deep-purple-400 text-gray-700'}`}
      >
        <i className="fa-solid fa-book"></i>
        <span className="text-[15px] ml-4 font-bold">Book</span>
      </Link>
      <Link to={"/admin/users"}
        className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${bgMenu == 'users' ? 'bg-deep-purple-accent-400 text-white' : 'hover:text-deep-purple-400 text-gray-700'}`}
      >
        <i className="fa-solid fa-book"></i>
        <span className="text-[15px] ml-4 font-bold">User</span>
      </Link>
      <div className="my-4 bg-gray-600 h-[1px]"></div>

      <div onClick={logout}
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-deep-purple-400 text-gray-700"
      >
        <i className="rotate-180 fa-solid fa-right-from-bracket"></i>
        <span className="text-[15px] ml-4 font-bold">Logout</span>
      </div>
    </div>

      <div className={`${sidebar ? 'ml-2' :  'ml-[250px]'} pr-4 md:mt-0 mt-10`}>
        {children}
      </div>
    </>
  );
}
