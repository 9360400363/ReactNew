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
    <div className="card">
      <img src={IMG_CDN_URl + cloudinaryImageId} />
      <h2 style={{ fontSize: "15px" }}>{name}</h2>
      <h3 className="cuisines-text">{cuisines.join(",")}</h3>
      <div className="card-footer">
        <h4>{avgRating} ★</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
