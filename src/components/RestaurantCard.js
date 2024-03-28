import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, avgRating, cuisines, deliveryTime, locality, costForTwo, cloudinaryImageId } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-400 hover:bg-gray-100">
            <img
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}
            />

            <h2>{name}</h2>
            <h4>{avgRating}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{locality}</h5>
        </div>
    );
};
export default RestaurantCard;