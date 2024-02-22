import Cta from "../Components/Fragments/Cta";
import { Header } from "../Components/Header";
import UserLayout from "../Layouts/UserLayout";
import "../homepage.css";
import BookWithFilter from "./Admin/Book/bookWithFilter";
import ScrollCarousel from "scroll-carousel-react";

export default function homepage({}) {
  return (
    <UserLayout isActive="login">
      <Header />
      <div className="flex justify-center items-center w-full">
        <main className="md:max-w-[95%] rounded-3xl">
          <div className="content">
            <h2>Our Popoular Books</h2>
            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam magnam obcaecati error consequatur repellat
              fugiat, deleniti nisi eum voluptates.
            </p>
            <ul className="counter">
              <li>
                <h3 className="text-2xl font-semibold">
                  <i className="fa-solid fa-book"></i>68+k
                </h3>
                <span>book collections</span>
              </li>
              <li>
                <h3 className="text-2xl font-semibold">
                  <i className="fa-solid fa-user"></i>25,634
                </h3>
                <span>customers</span>
              </li>
            </ul>
            <button className="btn">
              See More Collection <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="swiper-container">
            <div className="swiper">
              <div className="swiper-wrapper">
                <ScrollCarousel
                  autoplay
                  autoplaySpeed={8}
                  speed={7}
                  onReady={() => console.log("I am ready")}
                >
                  <div
                    className="swiper-slide"
                    style={{
                      background: "#0f2027",
                      backgroundImage:
                        'linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url("http://localhost:8000/assets/arva.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                    }}
                  >
                    <span>bestseller</span>
                    <div className="slide-content">
                      <h3>The Raven</h3>
                    </div>
                  </div>

                  <div
                    className="swiper-slide"
                    style={{
                      background: "#0f2027",
                      backgroundImage:
                        'linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url("http://localhost:8000/assets/arva.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                    }}
                  >
                    <span>bestseller</span>
                    <div className="slide-content">
                      <h3>The Raven</h3>
                    </div>
                  </div>

                  <div
                    className="swiper-slide"
                    style={{
                      background: "#0f2027",
                      backgroundImage:
                        'linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url("http://localhost:8000/assets/arva.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                    }}
                  >
                    <span>bestseller</span>
                    <div className="slide-content">
                      <h3>The Raven</h3>
                    </div>
                  </div>

                  <div
                    className="swiper-slide"
                    style={{
                      background: "#0f2027",
                      backgroundImage:
                        'linear-gradient(to bottom, #2c536400, #203a4303, #0f2027cc), url("http://localhost:8000/assets/arva.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "50% 50%",
                      backgroundSize: "cover",
                    }}
                  >
                    <span>bestseller</span>
                    <div className="slide-content">
                      <h3>The Raven</h3>
                    </div>
                  </div>
                </ScrollCarousel>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="infinite-scroll-genre">
        <ScrollCarousel
        autoplay
        direction="ltr"
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
         className="scroll">
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Premiere Pro</span>
            <span>Figma</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </ScrollCarousel>

        <ScrollCarousel
        autoplay
        direction="rtl"
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
        className="scroll">
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Premiere Pro</span>
            <span>Figma</span>
            <span>Angular</span>
            <span>Node JS</span>
          </div>
        </ScrollCarousel>
      </div>

      <BookWithFilter />

      <Cta
        title={"Ready to get started?"}
        description={"Start exploring our collection"}
        cta={"Get Started"}
        image="http://localhost:8000/assets/Ayah_20231205.jpg"
      />

      <div className="mt-8 text-center p-10 pb-1">
        <h1 className="font-bold text-4xl mb-4">Our Books</h1>
        {/* <h1 className="text-3xl"></h1> */}
      </div>

      <section
        id="Projects"
        className="w-fit pb-12 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 min-w-72 max-w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="http://localhost:8000/assets/Ayah_20231205.jpg"
              alt="Product"
              className="min-w-72 max-w-72 w-72 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Type Book
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Cerita Masa Lampau
              </p>
              <div className="flex items-center">
                <p className="text-lg font-normal text-gray-800 cursor-auto my-1">
                  - Andrea Hirata
                </p>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* <div className="font-sans text-[#333] max-w-6xl md:max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <div className="max-md:order-1 max-md:text-center">
            <p className="text-sm font-bold text-blue-600 mb-2">
              <span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE
              MEETING SCHEDULER
            </p>
            <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
              Schedule meetings effortlessly
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              Embark on a gastronomic journey with our curated dishes, delivered
              promptly to your doorstep. Elevate your dining experience today.
            </p>
            <div className="mt-10 space-x-4">
              <button
                type="button"
                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5"
              >
                Get started
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-bold text-sm rounded-full px-6 py-2.5"
              >
                Learn more
              </button>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <h4 className="font-bold text-base mb-2">
                {" "}
                by teams around the word
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <img
                  src="https://readymadeui.com/google-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
                <img
                  src="https://readymadeui.com/facebook-logo.svg"
                  className="w-28 mx-auto"
                  alt="facebook-logo"
                />
                <img
                  src="https://readymadeui.com/linkedin-logo.svg"
                  className="w-28 mx-auto"
                  alt="linkedin-logo"
                />
                <img
                  src="https://readymadeui.com/pinterest-logo.svg"
                  className="w-28 mx-auto"
                  alt="pinterest-logo"
                />
              </div>
            </div>
          </div>
          <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-600 before:h-full before:w-3/4 before:right-0 before:z-0">
            <img
              src="https://readymadeui.com/photo.webp"
              className="rounded-md lg:w-3/4 md:w-11/12 z-50 relative"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div> */}
    </UserLayout>
  );
}
