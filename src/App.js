import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartAddPage from "./components/CartAddPage";


//Old methods for reference const heading = React.createElement("div", {}, React.createElement("h1", {}, "I'm written using React"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// not recomended method.

// const head = (
//     <h1>This is react element.</h1>
// );

// const Header = () => {
//     return (
//         <div id="head-container">
//             {head}
//             <h1>
//                 Hello welcome to inside component rendering.
//             </h1>
//             <p>
//                 This is paragraph inside a component.
//             </p>
//         </div>
//     )
// };



const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: <CartAddPage />,
            }],
        errorElement: <Error />,
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

