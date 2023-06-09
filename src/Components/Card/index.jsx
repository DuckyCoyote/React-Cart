import { React, useContext } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";

function Card(data) {
  const { category, title, price, images, description } = data.data;

  const showProduct = (productDetail) => {
    context.OpenProductDetail();
    context.setproductToShow(productDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.OpenCheckoutSideMenu();
  };

  const RenderIcon = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length  > 0;
    if (isInCart) {
      return (
        <div
          className="pointer-events-none bg-black absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => addProductToCart(e, data.data)}
        >
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => addProductToCart(e, data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  };

  const context = useContext(ShoppingCartContext);

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[1]}
          alt={description}
        ></img>
        {RenderIcon(data.data.id)}
        <p className="flex justify-between">
          <span className="text-sm font-light">{title}</span>
          <span className="text-sm font-medium">{price}</span>
        </p>
      </figure>
    </div>
  );
}

export default Card;
