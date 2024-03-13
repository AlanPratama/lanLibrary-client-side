import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Category() {
  const url = 'http://localhost:8000'
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    const res = await axios.get(`${url}/api/category`, {
      withCredentials: true
    })

    setCategory(res.data.data)
  }

  useEffect(() => {
    getCategory()
  }, [])


  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")

  // ADD MODAL
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const handleAddCategoryModal = () => {
    if (!addCategoryModal) {
      setAddCategoryModal(true)
    } else {
      setName("")
      setAddCategoryModal(false)
    }
  }

  const addCategorSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/libManager/category`, {
        name: name
      }, {
        withCredentials: true
      })

      getCategory()
      setName("")
      toast.success(res.data.message, {
        position: "top-center"
      })
      setAddCategoryModal(false)

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      })
    }
  }


  // EDIT MODAL
  const [editCategoryModal, setEditCategoryModal] = useState(false)
  const handleEditCategoryModal = async (slug) => {
    if (!editCategoryModal) {
      const res = await axios.get(`${url}/api/category/${slug}`, {
        withCredentials: true
      })

      setName(res.data.data.name)
      setSlug(slug)
      setEditCategoryModal(true)
    } else {
      setName("")
      setSlug("")
      setEditCategoryModal(false)
    }
  }

  const editCategorySubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${url}/api/libManager/category/${slug}`, {
        name: name
      }, {
        withCredentials: true
      })

      getCategory()
      setName("")
      setSlug("")
      toast.success(res.data.message, {
        position: "top-center"
      })
      setEditCategoryModal(false)

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      })
    }
  }


  // DELETE MODAL
  const [delCategoryModal, setDelCategoryModal] = useState(false)
  const handleDelCategoryModal = (slug) => {
    if (!delCategoryModal) {
      setSlug(slug)
      setDelCategoryModal(true)
    } else {
      setSlug("")
      setDelCategoryModal(false)
    }
  }

  const delCategorySubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`${url}/api/libManager/category/${slug}`, {
        withCredentials: true
      })

      getCategory("")
      setSlug("")
      toast.success(res.data.message, {
        position: "top-center"
      })
      setDelCategoryModal(false)

    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      })
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-start items-center gap-2 mb-4">
        <button
          onClick={handleAddCategoryModal}
          type="button"
          className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
        >
          Add Type
        </button>
        <div className="relative font-[sans-serif] mx-auto">
          <button
            // onClick={handleActive}
            type="button"
            className="px-3 py-1.5 rounded text-white font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            {/* {filterBook ? filterBook.label : "Filter"} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-white inline ml-3"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
          </button>
          {/* <ul
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
                          onClick={() => handleFilter(type.id, type.nameAdd)}
                          className="py-2.5 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
                        >
                          {type.nameAdd}
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
            </ul> */}
        </div>
      </div>
      <table className="min-w-full  bg-white font-[sans-serif]">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="pl-6 w-8">No.</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Type
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Total Book
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {category
            ? category.map((category, index) => {
                return (
                  <tr className="" key={category.id}>
                    <td className="pl-6 w-8">{index + 1}</td>
                    <td className="px-6 py-3 text-sm">{category.name}</td>
                    {/* <td className="px-6 py-3 text-sm">{category.total_book}</td> */}
                    <td className="px-6 py-3">
                      <button
                        className="mr-4"
                        title="Edit"
                        onClick={() => handleEditCategoryModal(category.slug)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-blue-500 hover:fill-blue-700"
                          viewBox="0 0 348.882 348.882"
                        >
                          <path
                            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                            data-original="#000000"
                          />
                          <path
                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      <button
                        className="mr-4"
                        title="Delete"
                        onClick={() => handleDelCategoryModal(category.slug)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 hover:fill-red-700"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })
            : "NO DATA"}
        </tbody>
      </table>

      <div
        className={`${
          !addCategoryModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={addCategorSubmit}>
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Category Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Type Name"
                    type="text"
                    id="name"
                  />
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
                  onClick={handleAddCategoryModal}
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

      <div
        className={`${
          !editCategoryModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={editCategorySubmit}>
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Type Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Type Name"
                    type="text"
                    id="name"
                  />
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
                  onClick={handleEditCategoryModal}
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

      <div
        className={`${
          !delCategoryModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={delCategorySubmit}>
            <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <h3 className="text-lg">
                    Apakah Kamu Yakin Akan Menghapus Category Ini?
                  </h3>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-red-500 px-3 py-1.5 font-medium text-white sm:w-auto"
                >
                  Delete
                </button>
                <button
                  onClick={handleDelCategoryModal}
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
    </>
  )
}
