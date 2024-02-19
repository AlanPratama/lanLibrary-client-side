import React from "react";

export default function Cta({ title, description, cta, image }) {
  return (
    <>
      <div className="mx-auto w-screen max-w-screen-xl px-4">
        <div className="to flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-500 px-8 text-white shadow-lg">
          <div className="my-10 lg:my-8 lg:w-1/2">
            <h1 className="text-2xl font-bold">
              {title}
            </h1>
            <p className="mt-4 text-lg">
                {description}  
            </p>
            <button
              type="submit"
              className="group mt-4 mr-2 mb-4 flex cursor-pointer text-left text-xl font-semibold leading-tight text-white"
            >
              {cta}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:ml-8 ml-4 h-7 w-7 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
          <div className="hidden h-72 w-1/2 flex-shrink-0 justify-center lg:flex py-4">
            <img
              className="rounded"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
