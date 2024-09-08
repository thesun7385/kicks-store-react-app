import menCollection from "../assets/collection-men.jpg";
import womenCollection from "../assets/collection-women.jpg";
import kidsCollection from "../assets/collection-kids.jpg";

// category component
export default function Category() {
  return (
    <div className="m-8">
      <h1 className="uppercase font-inter text-black  text-3xl text-center sm:text-6xl sm:text-left font-extrabold">
        Shop by Collection
      </h1>

      {/* collection box */}
      <div
        className="py-8 flex flex-col  text-black items-center sm:flex-row font-anton uppercase 
      text-center text-2xl justify-center sm:space-x-5"
      >
        <div>
          <img
            src={menCollection}
            alt="men-collection"
            className="w-[300px] sm:w-auto h-[409px] sm:h-[518px] object-cover"
          />
          <h2 className="p-3">Mens</h2>
        </div>
        <div>
          <img
            src={womenCollection}
            alt="women-collection"
            className="w-[300px] sm:w-auto h-[409px] sm:h-[518px] object-cover"
          />
          <h2 className="p-3">Women</h2>
        </div>
        <div>
          <img
            src={kidsCollection}
            alt="kids-collection"
            className="w-[300px] sm:w-auto h-[409px] sm:h-[518px] object-cover"
          />
          <h2 className="p-3">Kids</h2>
        </div>
      </div>
    </div>
  );
}
