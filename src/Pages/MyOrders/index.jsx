import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

import OrdersCard from "../../Components/OrdersCard";
import Layout from "../../Components/Layout";

export default function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className="flex justify-center items-center mb-3">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={order.date}
            TotalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
