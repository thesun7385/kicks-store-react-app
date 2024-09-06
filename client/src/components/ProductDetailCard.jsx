import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function ProductDetailCard({ product }) {
  // dispatch action
  const dispatch = useDispatch();

  // Create a new cart item
  const { id, name, price, image, category } = product;
  // Add item to cart
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
        category,
      })
    );
  };

  // size array
  const size = [
    4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5, 13, 14, 15,
  ];

  return (
    <>
      {/* Product container */}
      <div className="m-5">
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
              {size.map((s) => (
                <button
                  key={s}
                  className="bg-white border hover:bg-gray-100
                  border-slate-800 text-black rounded-xl px-3 py-3 m-2 text-sm"
                >
                  US {s}
                </button>
              ))}
            </div>
            {/* Button */}
            <div className="flex flex-col gap-y-2 items-center">
              <button
                className=" w-96 bg-black  text-white uppercase 
              rounded-lg px-2 py-3  hover:bg-slate-800"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
              <button
                className="w-96 text-black border-2 border-slate-800 uppercase  
              rounded-lg px-2 py-3  hover:bg-red-400"
              >
                Add to Favorites
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
