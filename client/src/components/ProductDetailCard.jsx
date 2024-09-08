import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { favActions } from "../store/fav-slice";

import { useState } from "react";

export default function ProductDetailCard({ product }) {
  ///// For Cart module /////
  // Dummy size array
  const usSize = [
    4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5, 13, 14, 15,
  ];

  // Initial size
  const [selectedSize, setSelectedSize] = useState(0);
  const [cartFeedback, setCartFeedback] = useState(false);

  // function to handle size selection
  function sizeHandler(size) {
    setSelectedSize(size);
    console.log(size);
  }

  // Dispatch actions from store
  const dispatch = useDispatch();

  // Create a new cart item
  const { id, name, price, image, category } = product;

  // Add item to cart
  function addToCartHandler() {
    // Access the addItemToCart action from the cart slice
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        category,
        size: selectedSize,
      })
    );
  }

  // Function to handle cart feedback
  function cartFeedbackHandler() {
    setCartFeedback(true);
  }

  ///// For favorite /////

  // Get the favorite lost
  const favList = useSelector((state) => state.fav.items);

  // Check if the product is already in favorite
  const isFavorite = favList.some((item) => item.id === product.id);

  // State for favorite, initial state is false
  const [favorite, setFavorite] = useState(isFavorite);

  // function to handle favorite by id
  function favoriteHandler() {
    // If item is already in favorite, remove it
    if (isFavorite) {
      dispatch(favActions.removeItemFromFav(product.id)); // remove from favorite
      setFavorite(false);
    } else {
      dispatch(favActions.addItemToFav(product)); // add to favorite
      setFavorite(true);
    }
  }

  return (
    <>
      {/* Product container */}
      <div className="m-5">
        {/* Cart feedback info message */}
        {cartFeedback && selectedSize === 0 && (
          <div role="alert" className="alert  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Please select your size.</span>
          </div>
        )}

        <div
          className="flex sm:flex-row justify-center flex-col items-center sm:items-start 
          "
        >
          {/* Product image */}
          <div className="p-5">
            <img
              src={product.image}
              alt="product-image"
              className="card w-[80vw] h-[80vw] max-w-[437px]  max-h-[430px] 
          lg:max-w-[666px] lg:max-h-[712px] object-cover"
            />
          </div>
          {/* Product detail */}
          <div className="font-inter flex flex-col p-5 space-y-5">
            <div
              className="text-base sm:text-lg 
            font-light text-zinc-400"
            >
              {product.category}
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-black">
              {product.name}
            </div>

            <div className="text-xl">$ {product.price}</div>
            {/* size */}
            <div>
              <div className="py-2 text-lg">Select Size</div>
              {usSize.map((s) => (
                <button
                  key={s}
                  className={` border rounded-xl px-3 py-3 m-2 text-sm
                   ${
                     selectedSize === s
                       ? "bg-slate-800 text-white"
                       : "bg-white text-black border-slate-800 hover:bg-gray-800 hover:text-white"
                   }`}
                  onClick={() => sizeHandler(s)}
                >
                  US {s}
                </button>
              ))}
            </div>
            {/* Cart Button */}

            <div className="flex flex-col gap-y-2 items-center">
              <button
                className=" w-96 bg-black  text-white uppercase 
              rounded-lg px-2 py-3  hover:bg-slate-800 border-2 border-black"
                onClick={
                  selectedSize === 0 ? cartFeedbackHandler : addToCartHandler
                }
              >
                Add to Cart
              </button>

              {/* Favorite Button */}
              <button
                onClick={favoriteHandler}
                className={`w-96 uppercase rounded-lg px-2 py-3 
                ${
                  favorite
                    ? "bg-red-400 text-white border-red-400 border-2 hover:bg-red-500 "
                    : "border-slate-800  border-2 hover:bg-red-300 hover:text-white hover:border-red-300"
                }`}
              >
                {favorite ? "Remove from Favorite" : "Add to Favorite"}
              </button>
            </div>
            {/* Detail */}
            <div>
              <p className="font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
