import menCollection from "../assets/collection-men.jpg";
import womenCollection from "../assets/collection-women.jpg";
import kidsCollection from "../assets/collection-kids.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// category component
export default function Category() {
  return (
    <div className="mb-8">
      <h1 className="pl-8 uppercase font-inter text-black  text-3xl text-center sm:text-6xl sm:text-left font-extrabold">
        Shop by Collection
      </h1>

      {/* collection box */}
      <div
        className="py-8 flex flex-col  text-black items-center sm:flex-row 
        font-anton uppercase text-center text-2xl justify-center gap-y-20"
      >
        <div className="w-full sm:w-1/3 h-[409px] sm:h-[518px]">
          <Link to="/product/men">
            <img
              src={menCollection}
              alt="men-collection"
              className="w-full h-full object-cover"
            />

            <h2 className="p-3">Mens</h2>
          </Link>
        </div>

        <div className="w-full sm:w-1/3 h-[409px] sm:h-[518px]">
          <Link to="/product/women">
            <img
              src={womenCollection}
              alt="women-collection"
              className="w-full h-full object-cover"
            />

            <h2 className="p-3">Women</h2>
          </Link>
        </div>
        <div className="w-full sm:w-1/3 h-[409px] sm:h-[518px]">
          <Link to="/product/kids">
            <img
              src={kidsCollection}
              alt="kids-collection"
              className="w-full h-full object-cover"
            />

            <h2 className="p-3">Kids</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
