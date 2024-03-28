import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(true);

    const handleClick = () =>{
        setShowItems(!showItems);
    }
    //console.log(data);
    return <div>
        {/* header for accordion */}
        <div className="w-6/12 mx-auto my-5 bg-gray-100 p-4 shadow-lg">
            <div className="flex justify-between font-bold  cursor-pointer" onClick={handleClick}>
            <span>{data.title} ({data.itemCards.length}) </span>
            <span>+</span>
            </div>
          {  showItems && <CategoryList category={data.itemCards}/>}
        </div>
    </div>
}

export default RestaurantCategory;