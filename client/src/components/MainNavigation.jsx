import { NavLink } from "react-router-dom";
// React icons
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

// This is nav-bar component
export default function MainNavigation() {
  return (
    <>
      <header className="flex justify-center h-24">
        <nav className="flex justify-between w-full items-center  p-8">
          {/* Logo */}

          <h1 className="font-jost uppercase font-extrabold text-3xl italic">
            Kicks Store
          </h1>

          {/* Navigation */}
          <ul>
            <div className="h-6 w-96 font-inter flex justify-between items-center  font-semibold text-xl">
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
          <div className="fh-6 w-40 flex justify-between items-center text-xl">
            <IoIosSearch />
            <FaRegUser />
            <MdFavoriteBorder />
            <MdOutlineShoppingBag />
          </div>
        </nav>
      </header>
    </>
  );
}
