import React, { useEffect, useState } from "react";
import UserLayout from "../../Layouts/UserLayout";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../Loader/Spinner";

export default function BookDetail() {
  function ScrollToTopOnNavigate({}) {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);

    const [reviews, setReviews] = useState(true);

    function handleReviews() {
      if (reviews) {
        setReviews(false);
      } else {
        setReviews(true);
      }
    }
    const Detail = () => {
      const { pathname } = useLocation();
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        // Simulasi waktu loading
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
      }, []);

      useEffect(() => {
        if (!loading && pathname !== "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, [pathname, loading]);

      return (
        <>
          {loading ? (
            <div class="flex justify-center items-center w-2/3">
              <div class="relative inline-flex justify-center items-center">
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full"></div>
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
            </div>
          ) : (
            <div className="w-full px-4 md:w-2/3">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2 py-1.5 text-xs text-white bg-deep-purple-accent-400 rounded-sm">
                    Type Book
                  </span>
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-800 md:text-2xl">
                    Ayah: Nak Lihat Bulan Yang Ada Disana
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        </a>
                      </li>
                      <li>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </li>
                      <li>
                        <i className="fa-regular fa-star-half-stroke mr-1 text-orange-600"></i>
                      </li>
                    </ul>
                    <a
                      className="mb-4 text-xs underline hover:text-blue-600 lg:mb-0"
                      href="#"
                    >
                      View All Review
                    </a>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-700">Author :</h2>
                  <p>Alan Pratama</p>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-700">
                    Year Release :
                  </h2>
                  <p>2024</p>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-700">
                    Publisher :
                  </h2>
                  <p>Lalalala Jaya</p>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-700">Page :</h2>
                  <p>200</p>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <h2 className="text-lg font-bold text-gray-700">
                    Total Books :
                  </h2>
                  <p>20</p>
                </div>

                <div className="mb-3">
                  <h2 className="text-lg font-bold text-gray-700">
                    Description :
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum iste corporis quos quas earum obcaecati facere ipsum
                    perferendis consectetur officia tempora corrupti, illum
                    cupiditate voluptas quisquam ut optio consequuntur aut.
                  </p>
                </div>
                <div className="py-6 mb-6 border-t border-b border-gray-300">
                  <span className="text-base text-red-300 font-semibold">
                    Warning:
                  </span>
                  <p className="mt-2 text-sm text-gray-600">
                    Before you borrow this book,
                    <span className="text-blue-300 ml-1 font-semibold">
                      please read the regulation of LanLibrary!
                    </span>
                  </p>
                </div>
                <div className="mb-6 "></div>

                <div className="flex gap-2 mb-6">
                  <button className="w-full px-4 py-3 text-center bg-deep-purple-accent-400 text-white rounded">
                    Borrow Now
                  </button>
                  <button className="w-full px-4 py-3 text-center border border-deep-purple-accent-400 text-deep-purple-accent-400 bg-white hover:bg-gray-50 transition-all rounded">
                    Add To Favorite
                  </button>
                </div>

                <div className="mt-20 font-[sans-serif] text-[#333]">
                  <div className="mb-20 text-center">
                    <h2 className="text-2xl text-gray-700 font-semibold text-start">
                      Reviews:
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6 max-md:gap-10 max-w-6xl mx-auto">
                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-center max-w-screen-lg mx-auto">
                  <div class="flex items-center w-full">
                    <div class="w-full h-1 bg-deep-purple-accent-400"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <button
                      onClick={handleReviews}
                      to={"/book-detail/reviews/slug"}
                      class="w-auto font-medium text-deep-purple-accent-400 shrink-0 p-1.5"
                    >
                      See More {">>"}
                    </button>
                    <div class="w-full h-1 bg-deep-purple-accent-400"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

    const Reviews = () => {
      const { pathname } = useLocation();
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        // Simulasi waktu loading
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
      }, []);

      useEffect(() => {
        if (!loading && pathname !== "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, [pathname, loading]);

      return (
        <>
          {loading ? (
            <div class="flex justify-center items-center w-2/3">
              <div class="relative inline-flex justify-center items-center">
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full"></div>
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div class="w-12 h-12 bg-deep-purple-accent-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
            </div>
          ) : (
            <div className="w-full px-4 md:w-2/3">
              <div className="lg:pl-20">
                <div className=" font-[sans-serif] text-[#333]">
                  <div className="mb-20 text-center">
                    <h2 className="text-2xl text-gray-700 font-semibold text-start">
                      Reviews:
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6 max-md:gap-10 max-w-6xl mx-auto">
                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>

                    <div className="mb-16 h-auto py-8 px-4 lg:px-8 rounded-md mx-auto bg-white shadow-xl relative">
                      <img
                        src="https://readymadeui.com/profile_2.webp"
                        className="w-16 h-16 rounded-lg absolute right-0 left-0 border-4 border-white shadow-xl mx-auto -top-7"
                      />
                      <div className="flex space-x-1 mt-4">
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                        <i className="fa-solid fa-star mr-1 text-orange-600"></i>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm leading-relaxed text-justify">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, totam! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Atque, eaque!
                        </p>
                        <h4 className="text-base whitespace-nowrap font-extrabold mt-4">
                          Alan Pratama Rusfi
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">
                          (Staff Library)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-center max-w-screen-lg mx-auto">
                  <div class="flex items-center w-full">
                    <div class="w-full h-1 bg-deep-purple-accent-400"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <button
                      onClick={handleReviews}
                      class="w-auto font-medium text-deep-purple-accent-400 shrink-0 p-1.5"
                    >
                      Less More {">>"}
                    </button>
                    <div class="w-full h-1 bg-deep-purple-accent-400"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

    useEffect(() => {
      // Simulasi waktu loading
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1);

      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
      if (!loading && pathname !== "/") {
        window.scrollTo({ top: 0 });
      }
    }, [pathname, loading]);

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <UserLayout>
            <section className="py-10 font-poppins" id="top">
              <div className="px-4 mx-auto">
                <div className="flex flex-wrap  -mx-4">
                  <div className="w-full px-4 mb-8 md:w-1/3 md:mb-0">
                    <div className="sticky top-24 overflow-hidden">
                      <div className="relative mb-6 lg:h-[400px]">
                        <img
                          className="object-contain w-full lg:h-full"
                          src="http://localhost:8000/assets/Ayah_20231205.jpg"
                          alt=""
                        />
                      </div>

                      <div className="flex flex-wrap justify-evenly items-start gap-3 px-4">
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Romance
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Comedy
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Action
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Slice of Life
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Vanilla
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Action
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Slice of Life
                        </button>
                        <button className="border text-deep-purple-accent-200 border-deep-purple-accent-200 bg-whitetext-deep-purple-accent-200 hover:bg-gray-100 transition-all rounded px-2 py-0.5">
                          Vanilla
                        </button>
                      </div>
                    </div>
                  </div>
                  {reviews ? <Detail /> : <Reviews />}
                </div>
              </div>
            </section>
          </UserLayout>
        )}
      </>
    );
  }

  return (
    <>
      <ScrollToTopOnNavigate />
    </>
  );
}
