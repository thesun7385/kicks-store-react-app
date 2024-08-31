import { NavLink } from "react-router-dom";
// React icons
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

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

          <nav className="flex flex-row  justify-between w-full items-center p-8 ">
            {/* Logo */}

            <h1 className="font-jost uppercase font-extrabold italic text-base sm:text-2xl">
              Kicks Store
            </h1>

            <ul>
              {/* Navigation menu */}
              <div
                className="h-6 w-96 font-inter lg:flex font-semibold justify-between 
              items-center hidden text-base"
              >
                <NavLink to="/" end>
                  Home
                </NavLink>
                <NavLink to="/product">Men</NavLink>
                <NavLink to="/product">Women</NavLink>
                <NavLink to="/product">Kids</NavLink>
                <NavLink to="/about">About Us</NavLink>
              </div>
            </ul>
            {/* UI icons */}
            <div className="h-6 w-40 flex justify-between items-center text-base md:text-lg">
              <IoIosSearch />
              <FaRegUser />
              <MdFavoriteBorder />
              <MdOutlineShoppingBag />
              {/* Hamburger menu */}
              <div className="drawer-content lg:hidden">
                {/* Page content here */}
                <label htmlFor="my-drawer-4">
                  <TiThMenu />
                </label>
              </div>
            </div>
          </nav>
        </header>

        {/* Side menu */}
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 ">
            <div className="flex flex-row-reverse text-xl">
              <IoMdClose onClick={handdleSideBar} className="cursor-pointer" />
            </div>
            {/* Sidebar content here */}
            <div
              className="font-inter flex flex-col font-2xl font-semibold justify-between 
              items-center space-y-4"
            >
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/product">Men</NavLink>
              <NavLink to="/product">Women</NavLink>
              <NavLink to="/product">Kids</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
