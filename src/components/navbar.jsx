import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-3 px-4 flex items-center justify-between">
      <a
        className="font-bold text-xl tracking-tight flex items-center gap-4"
        href="#"
      >
        <img src={logo} alt="" width={40} height={40} />
        <h4>P-Service</h4>
      </a>
      <div className="flex items-center">
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="/"
        >
          Home
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="/products"
        >
          Products
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="/about"
        >
          About Us
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="/contact"
        >
          Contact Us
        </a>

        <div>
          <a
            className="text-sm pr-2 pl-4 py-2 leading-none rounded-full "
            href="#"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Register
            </button>
          </a>
          <a className="text-sm py-2 leading-none rounded-full " href="#">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
