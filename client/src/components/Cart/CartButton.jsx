import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function CartButton(props) {
  // useSelector to get the total quantity
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  // use dispatch to dispatch the action
  const dispatch = useDispatch();

  // function to open the cart
  function handleCartOpen() {
    dispatch(uiActions.openCart()); // access the toggle action from the ui-slice
  }

  return (
    <button onClick={handleCartOpen}>
      <div className="relative">
        <MdOutlineShoppingBag className="" />

        <span className="font-inter absolute -top-2 left-3 rounded-full bg-red-500 py-0.5 px-1.5 text-xs text-red-50">
          {cartQuantity}
        </span>
      </div>
    </button>
  );
}
