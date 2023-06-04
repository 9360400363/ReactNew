import { IMG_CDN_URl } from "../coding-7/constant";

const FoodItems = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className=" w-56 p-2 m-2   shadow-md bg-yellow-200 ">
      <img src={IMG_CDN_URl + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
    </div>
  );
};

export default FoodItems;
