import React from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.jpg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link to="/"> */}
        <div className=" flex">
          {" "}
          <img src={Logo} alt="" width={60} />
          <p className="pt-2">Estatery</p>
        </div>
        {/* </Link> */}
        <nav class="bg-gray-50 dark:bg-gray-700">
          <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6 hover:bg-slate-100">
            <div class="flex items-center">
              <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium ">
                <li>
                  <a
                    href="/"
                    class="text-gray-900 dark:text-white hover:text-blue-600"
                    aria-current="page"
                  >
                    Rent
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-900 dark:text-white hover:text-blue-600"
                  >
                    Buy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="text-gray-900 dark:text-white hover:text-blue-600"
                  >
                    Sell
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class=" flex text-left gap-6">
          <div>
            <button
              type="button"
              class="inline-flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
            >
              Manage property
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
            >
              Resources
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
