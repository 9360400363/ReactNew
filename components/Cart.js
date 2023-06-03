import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <h1 className=" font-bold text-3xlc">cart Items{cartItems.length} </h1>
  );
};

export default Cart;
