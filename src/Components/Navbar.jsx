import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
export const Navbar = ({ isActive, auth, setAuth, user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(auth, user);
  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setAuth("unauthorized");
      setUser("");
      if (response.status == 200) {
        return <Navigate to={"/auth/login"} />;
      }
    } catch (error) {
      console.error(error);
    }
  };

  let Menu;
  if (auth == "success" && user != null) {
    Menu = (
      <>
        <li>
          <div
            onClick={logout}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md bg-white border border-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Register"
            title="Register"
          >
            Logout
          </div>
        </li>
      </>
    );
  } else {
    Menu = (
      <>
        <li>
          <Link
            to={"/auth/login"}
            aria-label="Login"
            title="Login"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to={"/auth/register"}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Register"
            title="Register"
          >
            Register
          </Link>
        </li>
      </>
    );
  }

  return (
    <div className="px-4 py-5 mx-auto sticky top-0 bg-white z-50 sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8">
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to={"/"}
              aria-label="Go To Homepage"
              title="Go To Homepage"
              className={`font-medium tracking-wide ${
                isActive == "homepage" ? "text-blue-700" : "text-gray-700"
              } transition-colors duration-200 hover:text-deep-purple-accent-400`}
            >
              Homepage
            </Link>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className={`font-medium tracking-wide ${
                isActive == "popularBook" ? "text-blue-700" : "text-gray-700"
              } transition-colors duration-200 hover:text-deep-purple-accent-400`}
            >
              Popular Book
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className={`font-medium tracking-wide ${
                isActive == "allBook" ? "text-blue-700" : "text-gray-700"
              } transition-colors duration-200 hover:text-deep-purple-accent-400`}
            >
              All Book
            </a>
          </li>
        </ul>
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center lg:mx-auto"
        >
          <img
            src="/assets/lanLib-lg.png"
            alt="Lan Library"
            className="w-[30px] mr-1 p-0 text-deep-purple-accent-400"
          />
          <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
            <span className="text-deep-purple-accent-400 text-2xl">L</span>an
            <span className="text-deep-purple-accent-400 text-2xl ml-0.5">
              L
            </span>
            ibrary
          </span>
        </a>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          {Menu}
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <Link
                        to={"/auth/register"}
                        aria-label="Register"
                        title="Register"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-deep-purple-accent-400 transition duration-200 rounded shadow-md border border-deep-purple-accent-400 hover:bg-white focus:shadow-outline focus:outline-none"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/auth/login"}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Login"
                        title="Login"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
