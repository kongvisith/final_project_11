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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-1"
          : "bg-gray-900 py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-2xl tracking-tight text-white whitespace-nowrap">
                E-Commerce
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 w-max justify-center">
            <div className="flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[17px] font-bold transition-all whitespace-nowrap pb-1 ${
                    location.pathname === link.path
                      ? "text-white border-b-2 border-white"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/login"
              className="text-[17px] font-bold text-white hover:text-white transition-colors"
            >
              Sign up
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-[17px] font-bold py-2.5 px-7 rounded-lg transition-all active:scale-95"
            >
              Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-semibold ${
                location.pathname === link.path
                  ? "text-indigo-500"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-800 flex flex-col gap-4">
            <Link
              to="/login"
              className="w-full text-center py-3 text-gray-300 border border-gray-700 rounded-xl font-bold"
            >
              Sign up
            </Link>
            <Link
              to="/register"
              className="w-full bg-indigo-600 text-center py-3 text-white rounded-xl font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
