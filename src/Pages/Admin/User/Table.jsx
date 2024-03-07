import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function Table({ dataUser, setDataUser, meta }) {
  const [prev, setPrev] = useState(meta.prev_page_url);
  const [next, setNext] = useState(meta.next_page_url);
  const [current, setCurrent] = useState(meta.current_page);
  const [info, setInfo] = useState({
    show: meta.per_page,
    last: meta.last_page,
  });

  const handlePrev = async () => {
    try {
      const response = await axios.get(prev, { withCredentials: true });
      setDataUser(response.data.data.data);
      setPrev(response.data.data.prev_page_url);
      setNext(response.data.data.next_page_url);
      setCurrent(response.data.data.current_page);
      setInfo({
        show: response.data.data.data.length,
        last: response.data.data.last_page,
      });
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = async () => {
    try {
      const response = await axios.get(next, { withCredentials: true });
      setDataUser(response.data.data.data);
      setPrev(response.data.data.prev_page_url);
      setNext(response.data.data.next_page_url);
      setCurrent(response.data.data.current_page);
      setInfo({
        show: response.data.data.data.length,
        last: response.data.data.last_page,
      });
      console.log(response.data.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifiedUser = async (dataSlug) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/libManager/activing-user/${dataSlug}`,
        {},
        {
          withCredentials: true,
        }
      );

      // console.log(response.data.data);

      if (response.data.status == "success") {
        toast.success(response.data.message, {
          position: "top-center",
        });
      } else {
        toast.error(response.data.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };


  const [menuModal, setMenuModal] = useState(false)
  const [editUserModal, setEditUserModal] = useState(false);
  const [editPassModal, setEditPassModal] = useState(false)

  const [delUserModal, setDelUserModal] = useState(false)
  const [delUser, setDelUser] = useState([])

  const [userSlug, setUserSlug] = useState();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState();
  const [role, setRole] = useState();
  const [position, setPosition] = useState();
  const [proPic, setProPic] = useState();
  const [previewImage, setPreviewImage] = useState(null);

  const handlePreviewImage = (e) => {
    const selectedFile = e.target.files[0];
    setProPic(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const roleOption = [
    { value: "admin", label: "admin" },
    { value: "user", label: "user" },
  ];

  const positionOption = [
    { value: "Staff Library", label: "Staff Library" },
    { value: "Member", label: "Member" },
  ];

  const animatedComponents = makeAnimated();

  const editUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("username", username);
      formData.append("role", role.value);
      formData.append("position", position.value);
      formData.append("proPic", proPic);

      const response = await axios.post(
        `http://localhost:8000/api/libManager/user/${userSlug}`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(response);

      if (response.data.status == "success") {
        const res = await axios.get(
          "http://localhost:8000/api/libManager/user",
          {
            withCredentials: true,
          }
        );
        console.log(res.data.data);
        setDataUser(res.data.data.data);

        setUserSlug("");
        setName("");
        setEmail("");
        setPhone("");
        setUsername("");
        setRole("");
        setPosition("");
        setProPic("");
        setPreviewImage(null);
        setEditUserModal(false);
        toast.success(response.data.message, {
          position: "top-center",
        });
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUserModal = async (userSlug) => {
    if (!editUserModal) {
      const response = await axios.get(
        `http://localhost:8000/api/user/${userSlug}`,
        {
          withCredentials: true,
        }
      );

      console.log(response.data.data);
      setUserSlug(response.data.data.slug);

      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setPhone(response.data.data.phone);
      setUsername(response.data.data.username);

      setRole({
        value: response.data.data.role,
        label: response.data.data.role,
      });
      setPosition({
        value: response.data.data.position,
        label: response.data.data.position,
      });

      setProPic(response.data.data.proPic);

      setEditUserModal(true);
    } else {
      setUserSlug("");
      setName("");
      setEmail("");
      setPhone("");
      setUsername("");
      setRole("");
      setPosition("");
      setProPic("");
      setPreviewImage(null);
      setEditUserModal(false);
    }
  };

  const handleDelUserModal = async (userSlug) => {
    if (!delUserModal) {
      const response = await axios.get(`http://localhost:8000/api/user/${userSlug}`, {
        withCredentials: true
      })

      setDelUser(response.data.data)
      setDelUserModal(true)
    } else {
      setDelUser([])
      setDelUserModal(false)
    }
  }

  const delUserSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.delete(`http://localhost:8000/api/libManager/user/${delUser.slug}`, {
        withCredentials: true
      })

      if (response.data.status == 'success') {
        console.log(response);
        const res = await axios.get('http://localhost:8000/api/libManager/user', {
          withCredentials: true
        })
        setDataUser(res.data.data.data)
        setDelUser([])
        setDelUserModal(false)
        toast.success(response.data.message, {
          position: "top-center"
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="overflow-x-auto min-w-full py-8">
        <ToastContainer />
        <table className="min-w-full  bg-white font-[sans-serif]">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">No.</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Username
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Active
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {dataUser
              ? dataUser.map((data, i) => {
                  return (
                    <>
                      <tr className="" key={data.slug}>
                        <td className="pl-6 w-8">{i + 1}</td>
                        <td className="px-6 py-3 text-sm">
                          <div className="flex items-center cursor-pointer">
                            <img
                              loading="lazy"
                              src={`http://localhost:8000${data.proPic}`}
                              className="w-14 h-14 rounded-lg shadow shrink-0"
                            />
                            <div className="ml-4">
                              <p className="text-sm text-black font-medium">
                                {data.name}
                              </p>
                              <p className="text-xs text-gray-700">
                                {data.email}
                              </p>

                              <div className="flex justify-start items-center gap-1">
                                <button className="px-1 py-0.5 mt-1 text-xs text-deep-purple-accent-400 border border-deep-purple-accent-400">
                                  {data.role}
                                </button>
                                <span className="text-gray-400">|</span>
                                <button className="px-1 py-0.5 mt-1 text-xs text-deep-purple-accent-400 border border-deep-purple-accent-400">
                                  {data.position}
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-sm">{data.username}</td>
                        <td className="px-6 py-3 text-sm">{data.phone}</td>
                        <td className="px-6 py-3">
                          <label className="relative cursor-pointer">
                            {data.verified == "Verified" ? (
                              <>
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                  onChange={() => {
                                    handleVerifiedUser(data.slug);
                                  }}
                                  defaultChecked
                                />
                              </>
                            ) : (
                              <>
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                  onChange={() => {
                                    handleVerifiedUser(data.slug);
                                  }}
                                />
                              </>
                            )}
                            <div className="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]"></div>
                          </label>
                        </td>
                        <td className="px-6 py-3">
                          <button
                            className="mr-4"
                            title="Edit"
                            onClick={() => {
                              handleEditUserModal(data.slug);
                            }}
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
                          <button className="mr-4" title="Delete" onClick={() => {handleDelUserModal(data.slug)}}>
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
                    </>
                  );
                })
              : "TIDAK ADA DATA USER"}
          </tbody>
        </table>
        <div className="md:flex mt-4 px-6">
          <p className="text-sm text-gray-400 flex-1">
            Showind 1 to {info.show} of {info.last} entries
          </p>
          <div className="flex items-center max-md:mt-4">
            {/* <p className="text-sm text-gray-400">Display</p>
          <select className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select> */}
            <ul className="flex space-x-1 ml-2">
              {
                prev ? 
                <li
                onClick={handlePrev}
                className={`flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded`}
              >
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
              :
              <li
                className={`flex items-center justify-center cursor-not-allowed bg-gray-100 w-7 h-7 rounded`}
              >
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
              }
              {/* <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
              1
            </li> */}
              <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                {current}
              </li>
              {/* <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
              3
            </li> */}
              {
                next ? 
                <li
                onClick={handleNext}
                className={`flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded`}
              >
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
              :
              <li
                className={`flex items-center justify-center cursor-not-allowed bg-gray-100 w-7 h-7 rounded`}
              >
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
              }
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${
          !editUserModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={editUserSubmit}>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="email"
                    type="mail"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    placeholder="phone"
                    type="number"
                    id="phone"
                  />
                </div>
              </div>

              <div className="flex flex-wrap sm:gap-0 gap-2 justify-between items-start">
                <div className="w-1/3">
                  <img
                    src={
                      previewImage
                        ? previewImage
                        : `http://localhost:8000${proPic}`
                    }
                    alt=""
                    className="min-60 max-w-60 w-60 min-h-60 h-60 max-h-60 object-cover"
                  />
                </div>

                <div className="w-2/3 col-span-1">
                  <label className="sr-only" htmlFor="username">
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    placeholder="Username"
                    type="text"
                    id="username"
                  />

                  <label className="sr-only" htmlFor="role">
                    Role
                  </label>
                  <Select
                    value={role}
                    onChange={(selectedOptions) => setRole(selectedOptions)}
                    options={roleOption}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    name="role"
                    id="role"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm mb-3"
                  />

                  <label className="sr-only" htmlFor="position">
                    Position
                  </label>
                  <Select
                    value={position}
                    onChange={(selectedOptions) => setPosition(selectedOptions)}
                    options={positionOption}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    name="position"
                    id="position"
                    className="bg-white w-full rounded-lg border border-gray-300 text-sm mb-3"
                  />

                  <label className="sr-only" htmlFor="cover">
                    Cover Book
                  </label>
                  <input
                    onChange={handlePreviewImage}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                    type="file"
                    accept="image/*"
                    id="cover"
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
                  onClick={handleEditUserModal}
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
          !delUserModal ? "hidden" : ""
        }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form
              className="space-y-4 flex flex-col justify-center items-center"
              // onSubmit={editBookSubmit}
            >
              <h3 className="text-xl text-deep-purple-accent-400 font-medium">
                Apakah Kamu Yakin Akan Menghapus User Ini?
              </h3>

              <div className="w-full mt-4 flex justify-start items-start gap-3">
                <img
                  src={`http://localhost:8000${delUser.proPic}`}
                  alt={delUser.proPic}
                  className="shadow rounded min-w-36 max-w-36 min-h-36 max-h-36"
                />
                <div className="flex justify-start items-start flex-col">
                  <h3 className="text-lg">{delUser.name}</h3>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={delUserSubmit}
                  type="submit"
                  className="inline-block w-full rounded bg-red-500 px-3 py-1.5 font-medium text-white sm:w-auto"
                >
                  Hapus
                </button>
                <button
                  onClick={handleDelUserModal}
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
  );
}
