// import redux components
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

// FavoriteList component
export default function FavoriteList() {
  // Get the favorite items
  const favItems = useSelector((state) => state.fav.items);

  return (
    <>
      <div className="m-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {favItems && favItems.length > 0 ? (
          favItems.map((item) => (
            <Link to={`/product/${item.category}/${item.id}`} key={item.id}>
              <ProductCard key={item.id} product={item} />
            </Link>
          ))
        ) : (
          <div className="flex flex-row w-full items-center text-gray-600 font-light">
            <h1 className="text-xl">No favorite items</h1>
          </div>
        )}
      </div>
    </>
  );
}
