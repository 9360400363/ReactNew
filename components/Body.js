import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;

  return (
    <>
      <div className="Search-container p-5 margin-2 ">
        <input
          type="text"
          className="search-bar"
          placeholder="Search "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {}

        {}
        <button
          className="search-btn p-1 bg-yellow-200 rounded-md"
          onClick={() => {
            //need to filterData
            //const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            //setFilteredRestaurants(data);

            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          <h3> Search</h3>
        </button>
        {/*<h1>{searchClicked}</h1>*/}
      </div>
      {/*
            ->if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards 
            -> Also handled shimmer with search box
            */}
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 ? ( //Optional Chaining
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap">
          {filteredRestaurants.map((restaurant) => {
            return (
              // no key (not acceptable) <<< index key(use only if you don't have anything LAST OPTION) <<< unique key (BEST PRACTICE).
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
                style={{ textDecoration: "none" }}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
