import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TableBook from "./Table";
import "../../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function Book() {
  const [books, setBooks] = useState();
  const [searchBook, setSearchBook] = useState();
  const [filterBook, setFilterBook] = useState();
  const searchTimeOut = useRef();

  const [getType, setGetType] = useState([]);
  const [getWriter, setGetWriter] = useState([]);
  const [getCategories, setGetCategories] = useState([]);

  const [addBookModal, setAddBookModal] = useState(false);
  const handleAddBookModal = () => {
    if (!addBookModal) {
      setAddBookModal(true);
    } else {
      setAddBookModal(false);
    }
  };

  const [isActiveDrop, setIsActiveDrop] = useState(false);

  const handleActive = () => {
    if (isActiveDrop) {
      setIsActiveDrop(false);
    } else {
      setIsActiveDrop(true);
    }
  };

  useEffect(() => {
    if (!searchBook && !filterBook) {
      console.log("notOne");
      (async () => {
        try {
          const response = await axios.get(
            "http://localhost:8000/api/book",
            {},
            {
              withCredentials: true,
            }
          );

          setBooks(response.data.data.data);
          console.log(response.data.data.data);

          const resSD = await axios.get(
            "http://localhost:8000/api/side-dish-book",
            {},
            {
              withCredentials: true,
            }
          );
          setGetWriter(resSD.data.writers);
          setGetType(resSD.data.types);
          setGetCategories(resSD.data.categories);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      clearTimeout(searchTimeOut.current);

      if (searchBook && !filterBook) {
        console.log({ search: searchBook });
        searchTimeOut.current = setTimeout(async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/book?title=${searchBook}`,
              {
                withCredentials: true,
              }
            );

            console.log(response.data.data);
            console.log(searchTimeOut);
            setBooks(response.data.data.data);
          } catch (error) {
            console.error(error);
          }
        }, 1000);

        return () => clearTimeout(searchTimeOut.current);
      } else if (filterBook && !searchBook) {
        console.log({ filter: filterBook });
        searchTimeOut.current = setTimeout(async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/book?type=${filterBook.typeId}`,
              {
                withCredentials: true,
              }
            );

            console.log(response.data.data);
            console.log(searchTimeOut);
            setBooks(response.data.data.data);
          } catch (error) {
            console.error(error);
          }
        }, 1000);

        return () => clearTimeout(searchTimeOut.current);
      } else if (searchBook && filterBook) {
        console.log({ search_and_filter: [searchBook, filterBook] });
        searchTimeOut.current = setTimeout(async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/book?title=${searchBook}&type=${filterBook.typeId}`,
              {
                withCredentials: true,
              }
            );

            console.log(response.data.data);
            console.log(searchTimeOut);
            setBooks(response.data.data.data);
          } catch (error) {
            console.error(error);
          }
        }, 1000);

        return () => clearTimeout(searchTimeOut.current);
      }
    }
  }, [searchBook, filterBook]);

  const writerOptions = getWriter.map((writer) => {
    return { value: writer.id, label: writer.name };
  });

  const typeOptions = getType.map((type) => {
    return { value: type.id, label: type.name };
  });

  const categoryOptions = getCategories.map((cat) => {
    return { value: cat.id, label: cat.name };
  });

  const [writer, setWriter] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [totalBook, setTotalBook] = useState("");
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState("");
  const [cover, setCover] = useState("");

  const [previewAddCover, setPreviewAddCover] = useState(null);

  const handleCoverAddChange = (e) => {
    const selectedFile = e.target.files[0];
    setCover(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewAddCover(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const addBookSubmit = async (e) => {
    e.preventDefault();

    try {
      const formAdd = new FormData();
      formAdd.append("type_id", type.value);
      formAdd.append("writer_id", writer.value);
      formAdd.append("total_book", totalBook);
      formAdd.append("title", title);
      formAdd.append("publisher", publisher);
      formAdd.append("description", description);
      formAdd.append("year", year);
      formAdd.append("page", page);
      formAdd.append("cover", cover);
      category.forEach((cat) => {
        formAdd.append("categories[]", cat.value);
      });
      console.log(formAdd);
      const response = await axios.post(
        "http://localhost:8000/api/libManager/book",
        formAdd,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      // console.log(response);

      if (response.data.status == "success") {
        const res = await axios.get(
          "http://localhost:8000/api/book",
          {},
          {
            withCredentials: true,
          }
        );
        setBooks(res.data.data.data);
        setType("");
        setCategory([]);
        setTotalBook("");
        setTitle("");
        setPublisher("");
        setDescription("");
        setYear("");
        setPage("");
        setCover("");
        setAddBookModal(false);
        toast.success(response.data.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hsc = (e) => {
    setSearchBook(e.target.value);
  };

  const handleFilter = (typeId, typeName) => {
    setFilterBook({ typeId: typeId, label: typeName });
    setIsActiveDrop(false);
  };

  const animatedComponents = makeAnimated();
  return (
    <>
      <ToastContainer />
      <div
        className={`${
          !addBookModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={addBookSubmit}>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Book Title"
                    type="text"
                    id="title"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="publisher">
                    Publisher
                  </label>
                  <input
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="publisher"
                    type="text"
                    id="publisher"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="year">
                    Year
                  </label>
                  <input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="year"
                    type="text"
                    id="year"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Writer
                  </label>
                  <Select
                    onChange={(selectedOptions) => setWriter(selectedOptions)}
                    options={writerOptions}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    name="writer_id"
                    id="writer_id"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="type_id">
                    Type Book
                  </label>
                  <Select
                    onChange={(selectedOptions) => setType(selectedOptions)}
                    options={typeOptions}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    name="type_id"
                    id="type_id"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="categories">
                    Categories
                  </label>
                  <Select
                    onChange={(selectedOptions) => setCategory(selectedOptions)}
                    options={categoryOptions}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    name="categories"
                    id="categories"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap sm:gap-0 gap-2 justify-between items-start">
                <div className="w-1/3">
                  <img
                    src={
                      previewAddCover
                        ? previewAddCover
                        : "/assets/cover-404.jpg"
                    }
                    alt=""
                    className="min-60 max-w-60 w-60 max-h-96 object-cover"
                  />
                </div>

                <div className="w-2/3 col-span-1">
                  <label className="sr-only" htmlFor="cover">
                    Cover Book
                  </label>
                  <input
                    onChange={handleCoverAddChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    type="file"
                    accept="image/*"
                    id="cover"
                  />

                  <label className="sr-only" htmlFor="page">
                    Book Page
                  </label>
                  <input
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    placeholder="Book Page"
                    type="number"
                    id="page"
                  />

                  <label className="sr-only" htmlFor="total_book">
                    Total Book
                  </label>
                  <input
                    value={totalBook}
                    onChange={(e) => setTotalBook(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    placeholder="Total Book"
                    type="number"
                    id="total_book"
                  />
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>

                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="description"
                    rows="7"
                    id="description"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
                >
                  Submit
                </button>
                <button
                  onClick={handleAddBookModal}
                  type="button"
                  className="inline-block w-full rounded bg-white border border-deep-purple-accent-400 px-3 py-1.5 font-medium text-deep-purple-accent-400 ml-2 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-3 mb-4 items-center">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={handleAddBookModal}
            type="button"
            className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
          >
            Add Book
          </button>
          <div className="relative font-[sans-serif] w-max mx-auto">
            <button
              onClick={handleActive}
              type="button"
              className="px-3 py-1.5 rounded text-white font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              {filterBook ? filterBook.label : "Filter"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-white inline ml-3"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
            </button>
            <ul
              className={`${
                !isActiveDrop
                  ? "hidden"
                  : "absolute shadow-lg bg-white pt-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
              }`}
            >
              {getType
                ? getType.map((type, i) => {
                    return (
                      <>
                        <li
                          key={i}
                          onClick={() => handleFilter(type.id, type.name)}
                          className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
                        >
                          {type.name}
                        </li>
                      </>
                    );
                  })
                : ""}
              {filterBook ? (
                <>
                  <li
                    onClick={() => {
                      setFilterBook(null);
                      setIsActiveDrop(false);
                    }}
                    className="py-2.5 px-6 bg-red-500 text-white text-sm cursor-pointer"
                  >
                    Hapus Filter
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="relative flex w-full max-w-lg items-center justify-between rounded-md border shadow">
          <svg
            className="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input
            value={searchBook}
            onChange={hsc}
            type="name"
            name="search"
            className="h-10 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Search title book....."
          />
        </div>
      </div>

      <div className="overflow-x-auto min-w-full pb-8 pt-2">
        <TableBook
          books={books}
          setBooks={setBooks}
          writers={getWriter}
          types={getType}
          categories={getCategories}
        />
        <div className="md:flex mt-4 px-6">
          <p className="text-sm text-gray-400 flex-1">
            Showind 1 to 5 of 100 entries
          </p>
          <div className="flex items-center max-md:mt-4">
            <p className="text-sm text-gray-400">Display</p>
            <select className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <ul className="flex space-x-1 ml-2">
              <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-500"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                1
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                2
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                3
              </li>
              <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                4
              </li>
              <li className="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-500 rotate-180"
                  viewBox="0 0 55.753 55.753"
                >
                  <path
                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                    data-original="#000000"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
