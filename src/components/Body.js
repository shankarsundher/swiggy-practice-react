import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";


const Body = () => {
    // Local State Variable, whenever the state variable changes our UI will re-renders.
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [inputValue, setInputValue] = useState("");
   // console.log(listOfRestaurant);

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();
      //  console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //  path of data form API- data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
       //                          data.cards[4].card.card.gridElements.infoWithStyle.restaurants

    };
    //Conditional Rendering
    // if(listOfRestaurant.length == 0){
    //     return <Shimmer/>
    // }
    return listOfRestaurant?.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black rounded-md" value={inputValue} onChange={(e) => {
                       setInputValue(e.target.value);
                       }}/>
                      
                    <button className="px-2 bg-slate-400 m-4 rounded-sm text-white" onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) => {
                        return res.info.name.toLowerCase().includes(inputValue.toLowerCase())
                        });
                        setFilteredRestaurant(filteredRestaurant);
                        setInputValue('');
                    }}>Search</button>
                </div>
               <div  className="m-4 p-4 flex items-center">
               <button className="px-4 py-2 bg-slate-400 rounded-sm text-white"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >Top Rated Restaurant</button>
               </div>
            </div>
            <div className="flex flex-wrap rounded-lg">
                {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
                    <RestaurantCard  resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;