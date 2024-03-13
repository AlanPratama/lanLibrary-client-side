import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookWithFilter() {
  const url = "http://localhost:8000";
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const res = await axios.get(`${url}/api/getBooks?paginate=12`, {
        withCredentials: true,
      });

      setBook(res.data.data.data);
      console.log(book);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-gray-800 text-5xl pt-10">
        <span className="text-deep-purple-accent-400">L</span>an
        <span className="text-deep-purple-accent-400 ml-0.5">L</span>ibrary's
        Book Collections
      </h1>
      <section className="pb-8 pt-2 bg-gray-50 font-poppins flex justify-center items-center">
        <div className="px-4 py-4 mx-auto sm:max-w-[95%] max-w-full lg:py-6 md:px-6">
          <div className="flex flex-wrap mb-24 -mx-3">
            {/* FILTER */}
            <div className="w-full pr-2 lg:w-1/4 lg:block lg:sticky lg:top-24 lg:h-full">
              <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-2xl font-bold text-deep-purple-accent-400">
                    {" "}
                    Filter Book{" "}
                  </span>
                </summary>
              </details>

              <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-xl font-bold"> Type Book </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> 0 Selected </span>

                    <button
                      type="button"
                      className="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label
                        htmlFor="FilterInStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          In Stock (5+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterPreOrder"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Pre Order (3+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterOutOfStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Out of Stock (10+){" "}
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-xl font-bold"> Categories </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> 0 Selected </span>

                    <button
                      type="button"
                      className="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label
                        htmlFor="FilterInStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          In Stock (5+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterPreOrder"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Pre Order (3+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterOutOfStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Out of Stock (10+){" "}
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-xl font-bold"> Categories </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="border-t border-gray-200 bg-white">
                  <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700"> 0 Selected </span>

                    <button
                      type="button"
                      className="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label
                        htmlFor="FilterInStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          In Stock (5+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterPreOrder"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Pre Order (3+){" "}
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        htmlFor="FilterOutOfStock"
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          className="size-5 rounded border-gray-300"
                        />

                        <span className="text-sm font-medium text-gray-700">
                          {" "}
                          Out of Stock (10+){" "}
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            {/* END FILTER */}
            <div className="w-full md:px-3 px-0 lg:w-3/4 lg:mt-0 mt-6">
              <div className="flex flex-wrap items-start ">
                {book &&
                  book.map((book, i) => {
                    return (
                      <Link to={`/book-detail/${book.slug}`} key={i+1} className="md:px-3 px-1 mb-6 w-1/2 md:w-1/3 lg:w-[250px]">
                        {/* CARD START */}
                        <div className="border border-gray-300">
                          <div className="relative bg-gray-200">
                              <img
                                src={url + book.cover}                                
                                alt={book.title}
                                className="object-cover h-auto sm:h-[300px] mx-auto "
                              />
                          </div>
                          <div className="p-3 sm:block hidden">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h3 className="text-xl text-gray-700 font-semibold">
                                {book.title}
                              </h3>
                              {/* <div className="flex">
                                  TYPE BOOK
                              </div> */}
                            </div>
                            <p className="text-lg ">
                              <span className="">{book.types.name} | {book.writers.name}</span>
                            </p>
                          </div>
                          <div className="flex justify-evenly items-center border-t border-gray-300">
                            <a
                              href="#"
                              className="text-2xl py-3 flex justify-center items-center transition-all w-1/2 text-gray-500 hover:text-red-500"
                            >
                              <i className="fa-regular fa-heart"></i>
                              {/* <i className="fa-solid fa-heart"></i> */}
                            </a>
                            {/* <span className="text-xl text-gray-600">|</span> */}
                            <a
                              href="#"
                              className="text-2xl text-medium py-3 flex justify-center items-center transition-all w-1/2  text-deep-purple-accent-400"
                            >
                              20
                              {/* <i className="fa-solid fa-users"></i> */}
                            </a>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <div className="flex justify-end mt-6">
                <nav aria-label="page-navigation">
                  <ul className="flex list-style-none">
                    <li className="page-item disabled ">
                      <a
                        href="#"
                        className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md hover:text-gray-100 hover:bg-blue-600"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 mr-3 text-base hover:text-blue-700 transition-all duration-300 hover:bg-blue-200  rounded-md text-gray-100 bg-blue-400"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 hover:bg-blue-100 rounded-md mr-3  "
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 hover:bg-blue-100 rounded-md mr-3 "
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item ">
                      <a
                        href="#"
                        className="relative block px-3 py-1.5 text-base text-gray-700 transition-all duration-300 hover:bg-blue-100 rounded-md "
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
