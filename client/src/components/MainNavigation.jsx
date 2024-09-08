import { NavLink } from "react-router-dom";
// React icons
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import CartButton from "./Cart/CartButton";

// This is nav-bar component
export default function MainNavigation() {
  // Function to handle sidebar
  function handdleSideBar() {
    document.getElementById("my-drawer-4").checked = false;
  }

  return (
    <>
      <div className="drawer drawer-end  ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/*  Nav bar content */}
        <header className="flex justify-center h-20">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

          <nav className="text-black flex flex-row justify-between w-full items-center p-8 ">
            {/* Logo */}

            {/* <h1 className="font-jost uppercase font-extrabold italic text-base sm:text-xl ">
              Kicks Store
            </h1> */}

            <div className=" bg-base-100 ">
              <NavLink to="/" end>
                <a className="btn btn-ghost font-jost uppercase font-bold italic text-black text-base sm:text-xl">
                  Kicks Store
                </a>
              </NavLink>
            </div>

            <ul>
              {/* Navigation menu */}
              <div
                className="h-6 w-full font-inter md:flex md:text-lg font-semibold space-x-4 
              items-center justify-center hidden text-base  "
              >
                <NavLink
                  to="/product/men"
                  className="hover:text-slate-500 transition-colors duration-200"
                >
                  Men
                </NavLink>
                <NavLink
                  to="/product/women"
                  className="hover:text-slate-500 transition-colors duration-200"
                >
                  Women
                </NavLink>
                <NavLink
                  to="/product/kids"
                  className="hover:text-slate-500 transition-colors duration-200"
                >
                  Kids
                </NavLink>
                <NavLink
                  to="/about"
                  className="hover:text-slate-500 transition-colors duration-200"
                >
                  About Us
                </NavLink>
              </div>
            </ul>
            {/* UI icons */}
            <div className="h-6 w-40 flex justify-between items-center text-base md:text-lg  ">
              <IoIosSearch />
              <NavLink to="/register">
                <FaRegUser />
              </NavLink>
              <NavLink to="/favorites">
                <MdFavoriteBorder />
              </NavLink>
              {/* Cart button */}
              <CartButton />
              {/* Hamburger menu */}
              <div className="drawer-content md:hidden ">
                {/* Page content here */}
                <label htmlFor="my-drawer-4">
                  <TiThMenu />
                </label>
              </div>
            </div>
          </nav>
        </header>

        {/* Side menu */}
        <div className="drawer-side z-50 ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-base-content min-h-full w-60 p-4 ">
            <div className="flex flex-row-reverse text-2xl ">
              <IoMdClose onClick={handdleSideBar} className="cursor-pointer " />
            </div>
            {/* Sidebar content here */}
            <div
              className="font-inter flex flex-col text-lg font-semibold justify-between 
              items-center space-y-4 "
            >
              <NavLink to="/" onClick={handdleSideBar} end>
                Home
              </NavLink>
              <NavLink to="/product/men" onClick={handdleSideBar}>
                Men
              </NavLink>
              <NavLink to="/product/women" onClick={handdleSideBar}>
                Women
              </NavLink>
              <NavLink to="/product/kids" onClick={handdleSideBar}>
                Kids
              </NavLink>
              <NavLink to="/about" onClick={handdleSideBar}>
                About Us
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
