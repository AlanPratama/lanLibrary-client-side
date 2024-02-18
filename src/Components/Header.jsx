export const Header = ({}) => {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 lg:text-5xl">
          Building Your Next App with our Awesome components
        </h1>
        <p className="mt-6 text-gray-800 text-lg font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
        <div className="flex justify-center items-center gap-x-2">
          <button className="px-4 mr-2 py-3 mt-6 text-xl font-medium leading-5 text-center text-white capitalize transition-all bg-blue-accent-700 rounded-lg hover:opacity-95 lg:mx-0 lg:w-auto focus:outline-none">
            Pinjam Buku
          </button>
          <button className="px-3 ml-2 py-2.5 mt-6 text-xl font-medium leading-5 text-center capitalize transition-all text-blue-accent-700 bg-white border-2 border-blue-accent-700 rounded-lg lg:mx-0 lg:w-auto focus:outline-none hover:translate-x-3">
            Lihat Koleksi <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-[400px] rounded-xl lg:w-[90%]"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
      </div>
    </div>
  );
};
