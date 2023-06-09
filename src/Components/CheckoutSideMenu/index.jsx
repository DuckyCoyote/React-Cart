import { useContext } from "react";
import { Link } from "react-router-dom";

import OrderCard from "../OrderCard";
import { TotalPrice } from "../../Utils";

import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const date = new Date();
  const dateFormat = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`
  console.log(dateFormat)

  const HandleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: dateFormat,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: TotalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCount(0);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } scrollable-cards checkout_side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          onClick={() => context.CloseCheckoutSideMenu()}
          className="hover:cursor-pointer"
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className="flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            HandleDelete={HandleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${TotalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className={
              context.cartProducts.length > 0
                ? "mt-2 rounded-lg w-full bg-black py-3 text-white"
                : "hidden"
            }
            onClick={() => handleCheckOut()}
          >
            CheckOut
          </button>
        </Link>
      </div>
    </aside>
  );
}
