import Logo from "../icons/Chef in the Hat.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./utils/Store";
export const Title = () => (
  <div>
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </a>
  </div>
);

const Header = function () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className=" flex justify-between bg-yellow-200 shadow-md">
      <Title />

      <div className="Nav-container">
        <ul className=" flex py-10">
          <li className=" px-2 ">
            <Link to="/" id="Nav-container" className="fa fa-home">
              Home
            </Link>
          </li>
          <li className=" px-2 justify-center ">
            <Link to="/about" id="Nav-container" className="fa fa-info-circle">
              About us
            </Link>
          </li>
          <li className=" px-2 ">
            <Link to="/Cart" id="Nav-container" className="fa fa-shopping-cart">
              Cart{cartItems.length}
            </Link>
          </li>
          <li className=" px-2 ">
            <Link
              to="/contact"
              id="Nav-container"
              className="fa fa-address-book"
            >
              contact
            </Link>
          </li>

          {/* use conditional rendering for login and logout */}
          <li className=" px-2 justify-end">
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
