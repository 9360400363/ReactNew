import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import RestaurantMenu from "../components/RestaurantMenu";
import Instamart from "../components/instamart";
import { Provider } from "react-redux";
import store from "../components/utils/Store";
import Cart from "../components/Cart";
const Applayout = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
