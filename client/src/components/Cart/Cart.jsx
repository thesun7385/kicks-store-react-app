import { useState } from "react";

// import redux components
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Cart component
export default function Cart() {
  // Get the open state
  const openCart = useSelector((state) => state.ui.cartIsVisible);

  // Get the cart items
  const cartItems = useSelector((state) => state.cart.items);

  // Use dispatch to dispatch the action
  const dispatch = useDispatch();

  // Update the cart state
  function handleCloseCart() {
    dispatch(uiActions.closeCart());
  }

  return (
    <Dialog open={openCart} onClose={handleCloseCart} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity 
        duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 
              ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={handleCloseCart}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {cartItems && cartItems.length > 0 ? (
                        cartItems.map((items) => (
                          <CartItem
                            key={items.id}
                            item={{
                              id: items.id,
                              name: items.name,
                              image: items.image,
                              price: items.price,
                              category: items.category,
                              quantity: items.quantity,
                              total: items.totalPrice,
                            }}
                          />
                        ))
                      ) : (
                        <div className="text-center text-lg text-gray-500">
                          Your cart is empty
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$ 0</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border 
                      border-transparent bg-slate-800 px-6 py-3 text-base font-medium 
                      text-white shadow-sm hover:bg-slate-500"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={handleCloseCart}
                        className="font-medium text-slate-800 hover:text-slate-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
