import { React, useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  //Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail  -  Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const OpenProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);

  //Ckeckout Side Menu  -  Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Is ProductDetail Open  -Show product
  const [productToShow, setproductToShow] = useState({});

  //Shopping Cart  -  Add Products to card
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart  -  Order
  const [order, setOrder] = useState([]);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        OpenProductDetail,
        CloseProductDetail,
        isProductDetailOpen,
        productToShow,
        setproductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        OpenCheckoutSideMenu,
        CloseCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
