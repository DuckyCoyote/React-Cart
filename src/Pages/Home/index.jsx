import React, { useEffect, useState } from "react";

import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const PRODUCTS = "https://api.escuelajs.co/api/v1/products";

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(PRODUCTS)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={ item.id } />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
