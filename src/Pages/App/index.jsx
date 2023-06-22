import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";

import NavBar from "../../Components/NavBar";
import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";

import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import NotFound from "../NotFound";

import { ShoppingCartProvider } from "../../Context";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
