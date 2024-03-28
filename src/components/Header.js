import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginButton, setLoginButton] = useState('Login');

    const cartItems = useSelector((store) => store.cart.items);
  //  console.log(cartItems);
    return (
        <div className="flex justify-between bg-gray-200 shadow-xl mb-2">
            <div className="logo">
                <img className="w-32"
                    src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contacts</Link>
                    </li>
                    <li className="px-4">
                        <Link>Services</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart -({cartItems.length} items)</Link>
                    </li>
                    <li className="cursor-pointer"
                        onClick={() => {
                            loginButton == "Login" ? setLoginButton("Logout") : setLoginButton("Login");
                        }
                        }
                    >{loginButton}</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;