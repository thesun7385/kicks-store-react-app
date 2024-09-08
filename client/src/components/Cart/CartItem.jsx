import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

// Cart item component
export default function CartItem(props) {
  // Get the product details
  const { id, name, image, category, quantity, total, size } = props.item;

  const dispatch = useDispatch();

  // Function to add more quntity to cart
  function addItemHandler() {
    dispatch(cartActions.addItemToCart({ ...props.item, quantity: 1 }));
  }

  // Function to remove item from cart
  function removeItemHandler() {
    // Add {} because redux expects an object
    dispatch(cartActions.removeItemFromCart({ id, size }));
  }

  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {/* Render cart items */}
      <li key={id} className="flex py-6">
        <div
          className="h-24 w-24 flex-shrink-0 overflow-hidden 
        rounded-md border border-gray-200"
        >
          <img
            alt={name}
            src={image}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a>{name}</a>
              </h3>
              <p className="ml-2">$ {total}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
            <p className="mt-1 text-sm text-gray-500">US {size}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">x {quantity}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-slate-800 hover:text-slate-500 mr-2"
                onClick={addItemHandler}
              >
                Add
              </button>
              <button
                type="button"
                className="font-medium text-slate-800 hover:text-slate-500"
                onClick={removeItemHandler}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
