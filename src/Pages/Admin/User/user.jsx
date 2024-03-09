import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Table from "./Table";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ErrorMsg from "./ErrorMsg";

export default function User() {
  const [dataUser, setDataUser] = useState([]);
  const [meta, setMeta] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        if (meta) {
          setCurrentPage(meta.current_page);
        }
        const response = await axios.get(
          `http://localhost:8000/api/libManager/user?page=${currentPage}`,
          {
            withCredentials: true,
          }
        );

        console.log(response);
        setDataUser(response.data.data.data);
        setMeta(response.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const lala = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/libManager/user?page=${currentPage}`,
        {
          withCredentials: true,
        }
      );

      console.log(response);
      setDataUser(response.data.data.data);
      setMeta(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [addUserModal, setAddUserModal] = useState();

  const handleAddUserModal = () => {
    if (!addUserModal) {
      setAddUserModal(true);
    } else {
      setAddUserModal(false);
    }
  };

  const [errMessage, setErrMessage] = useState([]);

  const [nameAdd, setNameAdd] = useState();
  const [emailAdd, setEmailAdd] = useState();
  const [phoneAdd, setPhoneAdd] = useState();
  const [usernameAdd, setUsernameAdd] = useState();
  const [passwordAdd, setPasswordAdd] = useState();
  const [confirmPasswordAdd, setConfirmPasswordAdd] = useState();
  const [roleAdd, setRoleAdd] = useState();
  const [positionAdd, setPositionAdd] = useState();
  const [proPicAdd, setProPicAdd] = useState();
  const [previewImageAdd, setPreviewImageAdd] = useState(null);

  const roleOption = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  const positionOption = [
    { value: "Staff Library", label: "Staff Library" },
    { value: "Member", label: "Member" },
  ];

  const animatedComponents = makeAnimated();

  const handlePreviewImage = (e) => {
    const selectedFile = e.target.files[0];
    setProPicAdd(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImageAdd(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const addUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", nameAdd);
      formData.append("email", emailAdd);
      formData.append("phone", phoneAdd);
      formData.append("username", usernameAdd);
      formData.append("password", passwordAdd);
      formData.append("confirmPassword", confirmPasswordAdd);
      formData.append("role", roleAdd.value);
      formData.append("position", positionAdd.value);
      formData.append("proPic", proPicAdd);

      const response = await axios.post(
        "http://localhost:8000/api/libManager/user",
        formData,
        {
          withCredentials: true,
        }
      );

      setAddUserModal(false);

      setNameAdd("");
      setEmailAdd("");
      setPhoneAdd("");
      setRoleAdd([]);
      setPositionAdd([]);
      setUsernameAdd("");
      setPasswordAdd("");
      setConfirmPasswordAdd("");
      setProPicAdd("");

      toast.success(response.data.message, {
        position: "top-center",
      });

      setErrMessage("");

      lala();
      setAddUserModal(false);
    } catch (error) {
      setErrMessage(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      {meta && currentPage ? (
        <>
          <div className="flex justify-start items-center gap-2">
            <button
              onClick={handleAddUserModal}
              type="button"
              className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
            >
              Add Book
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
                    fill-rule="evenodd"
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

          <div
            className={`${
              !addUserModal ? "hidden" : ""
            }  l transition-all min-h-screen h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
          >
            <div className="relative w-full flex justify-center items-center h-full">
              <div className="max-w-4xl max-h-full rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                {errMessage && <ErrorMsg errMessage={errMessage} />}

                <form className="space-y-4" onSubmit={addUserSubmit}>
                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <label className="sr-only" htmlFor="nameAdd">
                        Name
                      </label>
                      <input
                        name="nameAdd"
                        value={nameAdd}
                        onChange={(e) => {
                          setNameAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="nameAdd"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="emailAdd">
                        Email
                      </label>
                      <input
                        value={emailAdd}
                        onChange={(e) => {
                          setEmailAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Email"
                        type="mail"
                        id="emailAdd"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phoneAdd">
                        Phone
                      </label>
                      <input
                        value={phoneAdd}
                        onChange={(e) => {
                          setPhoneAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Phone"
                        type="number"
                        id="phoneAdd"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:gap-0 gap-2 justify-between items-start">
                    <div className="w-1/3">
                      <img
                        src={
                          previewImageAdd
                            ? previewImageAdd
                            : `http://localhost:8000/assets/404-user-img.png`
                        }
                        alt=""
                        className="min-60 max-w-60 w-60 min-h-60 h-60 shadow max-h-60 object-cover"
                      />
                    </div>

                    <div className="w-2/3 col-span-1">
                      <label className="sr-only" htmlFor="coverAdd">
                        Cover Book
                      </label>
                      <input
                        onChange={handlePreviewImage}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                        type="file"
                        accept="image/*"
                        id="coverAdd"
                      />

                      <label className="sr-only" htmlFor="usernameAdd">
                        Username
                      </label>
                      <input
                        value={usernameAdd}
                        onChange={(e) => {
                          setUsernameAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                        placeholder="Username"
                        type="text"
                        id="usernameAdd"
                      />

                      <label className="sr-only" htmlFor="passswordAdd">
                        Password
                      </label>
                      <input
                        value={passwordAdd}
                        onChange={(e) => {
                          setPasswordAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                        placeholder="Password"
                        type="password"
                        id="passswordAdd"
                      />

                      <label className="sr-only" htmlFor="confirmPasswordAdd">
                        Confirm Password
                      </label>
                      <input
                        value={confirmPasswordAdd}
                        onChange={(e) => {
                          setConfirmPasswordAdd(e.target.value);
                        }}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm mb-3"
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmPasswordAdd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="roleAdd">
                        Role
                      </label>
                      <Select
                        value={roleAdd}
                        onChange={(selectedOptions) =>
                          setRoleAdd(selectedOptions)
                        }
                        options={roleOption}
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        name="roleAdd"
                        id="roleAdd"
                        className="bg-white w-full rounded-lg border border-gray-300 text-sm mb-3"
                      />
                    </div>
                    <label className="sr-only" htmlFor="positionAdd">
                      Position
                    </label>
                    <Select
                      value={positionAdd}
                      onChange={(selectedOptions) =>
                        setPositionAdd(selectedOptions)
                      }
                      options={positionOption}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      name="positionAdd"
                      id="positionAdd"
                      className="bg-white w-full rounded-lg border border-gray-300 text-sm mb-3"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded bg-deep-purple-accent-400 px-3 py-1.5 font-medium text-white sm:w-auto"
                    >
                      Submit
                    </button>
                    <button
                      onClick={handleAddUserModal}
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

          <Table
            dataUser={dataUser}
            setDataUser={setDataUser}
            meta={meta}
            setMeta={setMeta}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
