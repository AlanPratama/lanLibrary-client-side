import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  // onSubmit = {handleSubmit}
  // const [name, setName] = onChange()
  // onChange = {(e) => setName(e.target.value)}





















  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [redirect, setRedirect] = useState(false);
  // const navigate = useNavigate();


  const nav = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name,
          phone,
          email,
          username,
          password,
          confirmPassword
        }),
      });

      nav('/auth/login');
      
    } catch (error) {
      console.error(error);
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await fetch("http://localhost:8000/api/auth/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name,
  //       phone,
  //       email,
  //       username,
  //       password,
  //       confirmPassword,
  //     }),
  //   });
  //   setRedirect(true);
  // };

  // if (redirect) {
  //   return navigate("/auth/login");
  // }

  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Regist Your Account!
        </h3>
        <form onSubmit={handleSubmit2}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Alan Pratama Rusfi"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="phone" className="inline-block mb-1 font-medium">
              Phone
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0888********"
              required
              type="number"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
            />
          </div>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="lalala@example.com"
              required
              type="mail"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>

          <div className="mb-1 sm:mb-2">
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

          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="confirmPassword"
              className="inline-block mb-1 font-medium"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="************"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Register
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            Already Have An Account?{" "}
            <Link
              to={"/auth/login"}
              className="text-deep-purple-accent-700 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
