import { useSelector } from "react-redux";
import FoodItems from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className=" font-bold text-3xlc">cart Items{cartItems.length} </h1>
      <FoodItems {...cartItems[0]} />
    </div>
  );
};

export default Cart;
