import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/AdminLayout";
import Table from "../../../Components/Table";
import axios from "axios";
import TableBook from "./Table";
import "../../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function Book() {
  const [books, setBooks] = useState();

  const [addBookModal, setAddBookModal] = useState(false);
  const [getType, setGetType] = useState([]);
  const [getWriter, setGetWriter] = useState([]);
  const [getCategories, setGetCategories] = useState([]);

  const handleAddBookModal = () => {
    if (!addBookModal) {
      setAddBookModal(true);
    } else {
      setAddBookModal(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/book",
          {},
          {
            withCredentials: true,
          }
        );

        setBooks(response.data.data);

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
  }, []);

  const writerOptions = getWriter.map(writer => {
    return { value: writer.id, label: writer.name }
  })

  const typeOptions = getType.map(type => {
    return { value: type.id, label: type.name }
  })

  const categoryOptions = getCategories.map((cat, i) => {
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

  const [previewAddCover, setPreviewAddCover] = useState(null)

  const handleCoverAddChange = (e) => {
    const selectedFile = e.target.files[0]
    setCover(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewAddCover(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }

  }

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
      category.forEach(cat => {
        formAdd.append("categories[]", cat.value);
      });
      console.log(writer.value, type);
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
        setBooks(res.data.data);
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
                  <img src={previewAddCover ? previewAddCover : '/assets/cover-404.jpg'} alt="" className="min-60 max-w-60 w-60 max-h-96 object-cover" />
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

      <button
        onClick={handleAddBookModal}
        type="button"
        className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
      >
        Add Book
      </button>
      <div className="overflow-x-auto min-w-full pb-8 pt-2">
        <TableBook books={books} />
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
