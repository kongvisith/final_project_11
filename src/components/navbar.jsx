import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className="relative z-[100] bg-gray-900 py-4 border-b border-gray-800">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo Section */}
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-white whitespace-nowrap">
                E-Commerce
              </span>
            </Link>
          </div>

          {}
          {}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 w-max justify-center">
            <div className="flex items-center gap-6 lg:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[16px] lg:text-[17px] font-bold transition-all whitespace-nowrap pb-1 ${
                    location.pathname === link.path
                      ? "text-white border-b-2 border-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/login"
              className="text-[16px] lg:text-[17px] font-bold text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[16px] lg:text-[17px] font-bold py-2.5 px-6 lg:px-7 rounded-lg transition-all active:scale-95 whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>

          {}
          {}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>
        </div>
      </div>

      {}
      {}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 transition-all duration-300 shadow-2xl ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-8 space-y-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-semibold transition-colors ${
                location.pathname === link.path
                  ? "text-indigo-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-800 flex flex-col gap-4">
            <Link
              to="/LoginForm"
              className="w-full text-center py-3 text-gray-300 border border-gray-700 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/RegisterForm"
              className="w-full bg-indigo-600 text-center py-3 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
