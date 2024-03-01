import { useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function TableBook({ books, setBooks, writers, types, categories }) {
  const [bookSlug, setBookSLug] = useState("")
  const [writerE, setWriterE] = useState("");
  const [typeE, setTypeE] = useState("");
  const [categoryE, setCategoryE] = useState([]);
  const [totalBookE, setTotalBookE] = useState("");
  const [titleE, setTitleE] = useState("");
  const [publisherE, setPublisherE] = useState("");
  const [descriptionE, setDescriptionE] = useState("");
  const [yearE, setYearE] = useState("");
  const [pageE, setPageE] = useState("");

  const [coverE, setCoverE] = useState("");

  const [previewEditCover, setPreviewEditCover] = useState(null)
  const handleCoverAddChange = (e) => {
    const selectedFile = e.target.files[0]
    setCoverE(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewEditCover(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }

  }


  const writerOptionsE = writers.map(writer => {
    return { value: writer.id, label: writer.name }
  })

  const typeOptionsE = types.map(writer => {
    return { value: writer.id, label: writer.name }
  })

  const categoryOptionsE = categories.map(writer => {
    return { value: writer.id, label: writer.name }
  })


  const [editBookModal, setEditBookModal] = useState(false);
  const handleEditBookModal = async (bookSlug) => {
    if (!editBookModal) {
      const response = await axios.get(`http://localhost:8000/api/book/${bookSlug}`, {}, {
        withCredentials: true
      })

      const data = response.data.data

      const bookCategories = data.categories.map(category => ({
        value: category.id,
        label: category.name
      }));

      setBookSLug(data.slug)
      setWriterE({ value: data.writers.id, label: data.writers.name })
      setTypeE({ value: data.types.id, label: data.types.name })
      setCategoryE(bookCategories)
      setTotalBookE(data.total_book)
      setTitleE(data.title)
      setPublisherE(data.publisher)
      setDescriptionE(data.description)
      setYearE(data.year)
      setPageE(data.page)
      setCoverE(data.cover)

      setEditBookModal(true);
    } else {
      setEditBookModal(false);
    }
  };

  const editBookSubmit = async (e) => {
    e.preventDefault()
    try {
      const formEditData = new FormData()
      formEditData.append("writer_id", writerE.value)
      formEditData.append('type_id', typeE.value)
      formEditData.append('total_book', totalBookE)
      formEditData.append('title', titleE)
      formEditData.append('publisher', publisherE)
      formEditData.append('description', descriptionE)
      formEditData.append('year', yearE)
      formEditData.append('page', pageE)
      formEditData.append('cover', coverE)
      categoryE.forEach(cat => {
        formEditData.append('categories[]', cat.value)
      })
      console.log(coverE);
      const response = await axios.post(`http://localhost:8000/api/libManager/book/${bookSlug}`, 
        formEditData,
        {
          headers: { 'Content-Type' : 'multipart/form-data' },
          withCredentials: true
        }
      )
      
      if (response.data.status == 'success') {
        const res = await axios.get(
          "http://localhost:8000/api/book",
          {},
          {
            withCredentials: true,
          }
        );
        
        setBooks(res.data.data);
        setTypeE("");
        setCategoryE([]);
        setTotalBookE("");
        setTitleE("");
        setPublisherE("");
        setDescriptionE("");
        setYearE("");
        setPageE("");
        setCoverE("");
        setEditBookModal(false);
        toast.success(response.data.message, {
          position: "top-center",
        });
      }

    } catch (error) {
      console.error(error);
    }
  }


  const [delBookModal, setDelBookModal] = useState(false)
  const [bookDelCover, setBookDelCover] = useState("")
  const [bookDelTitle, setBookDelTitle] = useState("")
  const [bookDelSlug, setBookDelSlug] = useState("")

  const handleDelBookModal = async (bookSlug) => {
    if (!delBookModal) {
      const response = await axios.get(`http://localhost:8000/api/book/${bookSlug}`, {}, {
        withCredentials: true,
      })

      const book = response.data.data

      setBookDelCover(book.cover)
      setBookDelTitle(book.title)
      setBookDelSlug(book.slug)
      setDelBookModal(true)
      
    } else {
      // setBookDelCover("") 
      setDelBookModal(false)
    }
  }

  const delBookSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.delete(`http://localhost:8000/api/libManager/book/${bookDelSlug}`, {
        withCredentials: true
      })
      console.log(response.data);

      if (response.data.status == 'success') {
        setBookDelCover("")
        setBookDelTitle("")
        setBookDelSlug("")
        setDelBookModal(false)
        toast.success(response.data.message)
      } else {
        console.error('THERE IS SOMETHING WRONG!');
      }

    } catch (error) {
      console.error(error);
    }

  }

  const animatedComponentsE = makeAnimated();

  return (
    <>
    <table className="min-w-full  bg-white font-[sans-serif]">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">No.</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Book
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Publisher
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Page
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Stock / Loan
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Categories
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {books
              ? books.map((book, index) => {
                  return (
                    <tr className="" key={book.id}>
                      <td className="pl-6 w-8">{index + 1}</td>
                      <td className="px-6 py-3 text-sm">
                        <div className="flex items-center">
                          <img
                            src={"http://localhost:8000" + book.cover}
                            className="min-w-12 max-w-12 w-12 rounded-lg shadow shrink-0"
                          />
                          <div className="ml-4">
                            <p className="text-sm text-black">{book.title}</p>
                            <p className="text-sm text-gray-400">
                              {book.writers.name}
                            </p>
                            <button className="px-1 py-0.5 mt-1 text-xs text-deep-purple-accent-400 border border-deep-purple-accent-400">
                              {book.types.name}
                            </button>
                            <i className="fa-solid fa-star mx-1 text-xs text-orange-600"></i>
                            <span className="text-xs">(4.9)</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm">{book.publisher}</td>
                      <td className="px-6 py-3 text-sm">{book.page}</td>
                      <td className="px-6 py-3 text-sm">
                        {book.total_book} / {book.total_loan}
                      </td>
                      <td className="px-6 py-3">
                        <p className="max-w-36 text-sm text-wrap">
                          {book.categories.map((category) => {
                            return category.name + ", ";
                          })}
                        </p>
                      </td>
                      <td className="px-6 py-3">
                        <button className="mr-4" title="Edit" onClick={() => handleEditBookModal(book.slug)}>
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
                        <button className="mr-4" title="Delete" onClick={() => handleDelBookModal(book.slug)}>
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
          !editBookModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={editBookSubmit}>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label className="sr-only" htmlFor="title">
                    Title
                  </label>
                  <input
                    name='title'
                    value={titleE}
                    onChange={(e) => setTitleE(e.target.value)}
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
                    value={publisherE}
                    onChange={(e) => setPublisherE(e.target.value)}
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
                    value={yearE}
                    onChange={(e) => setYearE(e.target.value)}
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
                    value={writerE}
                    onChange={(selectedOptions) => setWriterE(selectedOptions)}
                    options={writerOptionsE}
                    closeMenuOnSelect={true}
                    components={animatedComponentsE}
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
                    value={typeE}
                    onChange={(selectedOptions) => setTypeE(selectedOptions)}
                    options={typeOptionsE}
                    closeMenuOnSelect={true}
                    components={animatedComponentsE}
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
                    value={categoryE}
                    onChange={(selectedOptions) => setCategoryE(selectedOptions)}
                    options={categoryOptionsE}
                    closeMenuOnSelect={false}
                    components={animatedComponentsE}
                    isMulti
                    name="categories"
                    id="categories"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap sm:gap-0 gap-2 justify-between items-start">
                <div className="w-1/3">
                  <img src={previewEditCover ? previewEditCover : `http://localhost:8000${coverE}`} alt="" className="min-60 max-w-60 w-60 max-h-96 object-cover" />
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
                    value={pageE}
                    onChange={(e) => setPageE(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    placeholder="Book Page"
                    type="number"
                    id="page"
                  />

                  <label className="sr-only" htmlFor="total_book">
                    Total Book
                  </label>
                  <input
                    value={totalBookE}
                    onChange={(e) => setTotalBookE(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    placeholder="Total Book"
                    type="number"
                    id="total_book"
                  />
                  <label className="sr-only" htmlFor="description">
                    Description
                  </label>

                  <textarea
                    value={descriptionE}
                    onChange={(e) => setDescriptionE(e.target.value)}
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
                  onClick={handleEditBookModal}
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
          !delBookModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4 flex flex-col justify-center items-center" onSubmit={editBookSubmit}>
              <h3 className='text-xl text-deep-purple-accent-400 font-medium'>Apakah Kamu Yakin Akan Menghapus Buku Ini?</h3>

              <div className="w-full mt-4 flex justify-start items-start gap-3">
                <img src={`http://localhost:8000${bookDelCover}`} alt={bookDelCover} className='shadow rounded min-w-36 max-w-36' />
                <div className="flex justify-start items-start flex-col">
                  <h3 className='text-lg'>{bookDelTitle}</h3>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={delBookSubmit}
                  type="submit"
                  className="inline-block w-full rounded bg-red-500 px-3 py-1.5 font-medium text-white sm:w-auto"
                >
                  Hapus
                </button>
                <button
                  onClick={handleDelBookModal}
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
