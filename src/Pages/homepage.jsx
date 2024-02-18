import { Header } from "../Components/Header";
import UserLayout from "../Layouts/UserLayout";
import "../homepage.css";
export default function homepage({}) {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    breakpoints: {
      460: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3.6,
      },
    },
  });

  return (
    <UserLayout isActive="login">
      <Header />
      <div className="flex justify-center items-center w-full">
      <main className="md:max-w-[95%] rounded-3xl">
        <div className="content">
          <h2>Our Popoular Books</h2>
          <p className="text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae quam magnam obcaecati error consequatur repellat fugiat,
            deleniti nisi eum voluptates.
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
              <div className="swiper-slide swiper-slide--two">
                <span>bestseller</span>
                <div className="slide-content">
                  <h3>Mademoiselle</h3>
                  <p>epic drama</p>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--three">
                <span>bestseller</span>
              </div>
              <div className="swiper-slide swiper-slide--four">
                <span>bestseller</span>
              </div>
              <div className="swiper-slide swiper-slide--five">
                <span>bestseller</span>
              </div>
              <div className="swiper-slide swiper-slide--six">
                <span>bestseller</span>
                <div className="slide-content">
                  <h3>Woman in the dark</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
        <div className="circle"></div>
      </main>
      </div>

      <div className="infinite-scroll-genre">
      <div className="scroll">
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
    </div>

    <div className="scroll">
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
    </div>
    
      </div>

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
