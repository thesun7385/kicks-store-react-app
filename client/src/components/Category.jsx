import menCollection from "../assets/collection-men.jpg";
import womenCollection from "../assets/collection-women.jpg";
import kidsCollection from "../assets/collection-kids.jpg";

// category component
export default function Category() {
  return (
    <div className="p-10 space-y-14 ">
      <h1 className="font-inter text-6xl font-semibold">Shop by Collection</h1>

      {/* collection box */}
      <div
        className="flex flex-row font-anton uppercase 
      text-center text-xl justify-center space-x-5"
      >
        <div>
          <img
            src={menCollection}
            alt="men-collection"
            className="w-auto h-[618px] object-cover"
          />
          <h2 className="py-3">Mens</h2>
        </div>
        <div>
          <img
            src={womenCollection}
            alt="women-collection"
            className="w-auto h-[618px] object-cover"
          />
          <h2 className="py-3">Women</h2>
        </div>
        <div>
          <img
            src={kidsCollection}
            alt="kids-collection"
            className="w-auto h-[618px] object-cover"
          />
          <h2 className="py-3">Kids</h2>
        </div>
      </div>
    </div>
  );
}
