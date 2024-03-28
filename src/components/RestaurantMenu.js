import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_URL } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
  //  console.log(resInfo);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL + resId);

        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data);
    };

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

        );
  //  console.log(categories);



    if (resInfo == null) {
        return <Shimmer />
    }
    const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <h2 className='font-bold text-lg'>{cuisines.join(", ")}: {costForTwo / 100}</h2>
            {
                categories.map((category) => (
                     <RestaurantCategory data={category?.card?.card}/>
                ))
            }
        </div>

    )
}

export default RestaurantMenu;