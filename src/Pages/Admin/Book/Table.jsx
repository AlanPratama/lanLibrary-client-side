import React from 'react'

export default function TableBook({ books }) {
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
                            src="/assets/cover-404.jpg"
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
                        <button className="mr-4" title="Edit">
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
                        <button className="mr-4" title="Delete">
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
    </>
  )
}
