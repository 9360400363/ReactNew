import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl } from "../coding-7/constant";
import Shimmer from "./shimmer";
import { useDispatch } from "react-redux";
import { additem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(additem(item));
  };

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div>
          <h1>Restautant id: {resId}</h1>
          <h2>{restaurantDetails?.name}</h2>
          <img
            src={IMG_CDN_URl + restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails?.name}
          />
          <h3>{restaurantDetails?.areaName}</h3>
          <h3>{restaurantDetails?.city}</h3>
          <h3>{restaurantDetails?.avgRating} stars</h3>
          <h3>{restaurantDetails?.costForTwoMessage}</h3>
        </div>

        <div>
          <h1>Menu</h1>
          {restaurantMenu.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}{" "}
              <button
                className=" p-1 border-t-neutral-400 "
                onClick={() => {
                  addFoodItem(item);
                }}
              >
                add
              </button>{" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
