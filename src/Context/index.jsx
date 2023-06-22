import { React, useState, useEffect } from "react";
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

  //Get Products

  const PRODUCTS = "https://api.escuelajs.co/api/v1/products";

  const [items, setItems] = useState([]);

  const [filtredItems, setFiltredItems] = useState(items);

  //Get Products By Title
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    fetch(PRODUCTS)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filtredItemsByTitle = items.filter((item) =>
    item.title.toLowerCase().includes(searchByTitle.toLowerCase())
  );
  const filtredItemsByCategory = items.filter((item) =>
    item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
  );

  useEffect(() => {
    setFiltredItems(filtredItemsByTitle);
  }, [items, searchByTitle]);

  useEffect(() => {
    setFiltredItems(filtredItemsByCategory);
  }, [items, searchByCategory]);

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filtredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
