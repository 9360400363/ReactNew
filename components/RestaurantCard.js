import { IMG_CDN_URl } from "../coding-7/constant";

const RestaurantCard = ({
  // props
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className=" w-56 p-2 m-2   shadow-md bg-yellow-200 ">
      <img src={IMG_CDN_URl + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="  ">{cuisines.join(",")}</h3>
      <div className="card-footer">
        <h4>{avgRating} ★</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
