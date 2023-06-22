import { React, useContext } from "react";

import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeStyle = "underline underline-offset-4";

  const context = useContext(ShoppingCartContext);

  return (
    <nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("clothes")}
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("electronics")}
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("fornitures")}
            to="/fornitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("toys")}
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory("others")}
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">ale@mail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center justify-center">
          <ShoppingBagIcon
            onClick={() => context.OpenCheckoutSideMenu()}
            className="h-6 w-6 cursor-pointer"
          />{" "}
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
