import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearCart } from "../utils/cartSlice";


const CartAddPage = () =>{
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart = () =>{
dispatch(clearCart());
    }

    return (
     
         <div className="text-center m-8 p-8">
         <h1 className="font-bold text-lg">Cart</h1>
         <button className="font-bold rounded-lg m-2 py-1 px-1 bg-red-400" onClick={handleClearCart}>
            ClearCart
         </button>
         <div className="w-6/12 m-auto">
            <CategoryList  category={cartItems}/>
        </div>
        </div>
       
     
    )
}


export default CartAddPage;