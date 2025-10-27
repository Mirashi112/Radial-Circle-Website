import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // mobile submenu
  const [hoverSubmenu, setHoverSubmenu] = useState(false); // desktop submenu
  const hoverTimeout = useRef(null);

  const linkClasses = ({ isActive }) =>
    `relative transition-colors duration-300 w-fit text-sm
     ${
       isActive
         ? "text-red-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1.5px] after:bg-red-600"
         : "text-gray-700 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1.5px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
     }`;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2 relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-8 w-auto mr-2" />
          <span className="text-base font-bold text-gray-800">
            Radial Circle Group
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-5 font-normal">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>

          {/* What We Do Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current);
              setHoverSubmenu(true);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => {
                setHoverSubmenu(false);
              }, 150); // delay before closing
            }}
          >
            <button className="flex items-center text-gray-700 hover:text-red-600 text-sm transition-colors duration-300">
              What We Do
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  hoverSubmenu ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute top-full left-0 w-72 bg-gray-50 shadow-lg rounded-lg py-2 transform transition-all duration-300 z-40 ${
                hoverSubmenu
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <NavLink
                to="/ross"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
              >
                Radial Circle Oil Support Services
              </NavLink>
              <NavLink
                to="/rctsl"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
              >
                Radial Circle Technical Services
              </NavLink>
              <NavLink
                to="/rcms"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
              >
                Radial Circle Marine Services
              </NavLink>
            </div>
          </div>

          <NavLink to="/WhoWeAre" className={linkClasses}>
            Who We Are
          </NavLink>
          {/* <NavLink to="/media" className={linkClasses}>
            Media
          </NavLink> */}
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
          <NavLink to="/careers" className={linkClasses}>
            Careers
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-xl text-blue-600 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-6 py-6 text-black text-sm font-medium z-40 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClasses}>
          Home
        </NavLink>

        {/* Mobile Dropdown */}
        <div className="w-full">
          <button
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="w-full flex items-center justify-between text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm"
          >
            What We Do
            <FaChevronDown
              className={`ml-2 transition-transform duration-300 ${
                submenuOpen ? "rotate-180 text-red-600" : ""
              }`}
            />
          </button>
          {submenuOpen && (
            <div className="pl-4 mt-2 flex flex-col gap-2 bg-gray-50 rounded-md p-2">
              <NavLink
                to="/ross"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded-md transition-colors duration-200"
              >
                Radial Circle Oil Support Services
              </NavLink>
              <NavLink
                to="/rctsl"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded-md transition-colors duration-200"
              >
                Radial Circle Technical Services
              </NavLink>
              <NavLink
                to="/rcms"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded-md transition-colors duration-200"
              >
                Radial Circle Marine Services
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/WhoWeAre"
          onClick={() => setIsOpen(false)}
          className={linkClasses}
        >
          Who We Are
        </NavLink>
        {/* <NavLink
          to="/media"
          onClick={() => setIsOpen(false)}
          className={linkClasses}
        >
          Media
        </NavLink> */}
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={linkClasses}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/careers"
          onClick={() => setIsOpen(false)}
          className={linkClasses}
        >
          Careers
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
