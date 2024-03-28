import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CategoryList = ({ category }) => {
   // console.log(category);

 const dispatch = useDispatch();

 const handleCartAddItems = (c) =>{
    dispatch(addItem(c));
 }
    return <div>
        <div>
            {category.map((c => (
                <div className="flex justify-between border-b-2 border-gray-200">
                    <div className="text-left my-2 w-10/12">
                        <span className="text-left font-bold">{c.card.info.name}</span><br></br>
                        <span className="text-left text-sm">{c.card.info.price / 100}</span>
                        <p className="text-left text-xs">{c.card.info.description}</p>
                    </div>
                    <div className="w-2/12">
                        <div className="absolute rounded-sm text-xs">
                            <button className="p-1 mt-12 bg-gray-100 shadow-md m-auto"
                            onClick={ () =>handleCartAddItems(c)}>
                                Add +
                            </button>
                        </div>
                        <img
                            className="rounded-lg w-24 my-2"
                            src={CDN_URL + c.card.info.imageId}
                        />
                    </div>
                </div>
            )))
            }
        </div>
    </div>
}

export default CategoryList;