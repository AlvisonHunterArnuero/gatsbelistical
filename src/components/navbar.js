import React from "react";
import { Link } from "gatsby";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 text-red-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="h-6 w-full"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
        />
        <span className="font-semibold text-xl tracking-tight pl-2">
          <Link to="/">GATSBELISTICAL</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow space-x-4 text-xl">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4"
            to="/characters"
            activeClassName="navbar-link-active"
          >
            CHARACTERS
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4"
            to="/comics"
            activeClassName="navbar-link-active"
          >
            COMICS
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-200 hover:text-white mr-4"
            to="/stories"
            activeClassName="navbar-link-active"
          >
            STORIES
          </Link>
        </div>
        <SearchBox />
      </div>
    </nav>
  );
}
