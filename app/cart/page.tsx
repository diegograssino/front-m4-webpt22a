"use client";

import { cartContext } from "@/contexts/cartContext";
import { UserContext } from "@/contexts/userContext";
import { buyOrder } from "@/services/ordersServices";
import { notFound } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {
  const { cart, clearCart } = useContext(cartContext);
  const { user, updateOrders } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      return notFound();
    }
  }, []);

  const handleCart = async () => {
    if (user) {
      const res = await buyOrder(cart, user);
      if (res.status === "approved") {
        clearCart();
        updateOrders({ status: res.status, id: res.id, date: res.date });
        alert("Order finished!");
      } else {
        alert(res.message);
      }
    }
  };

  const initialOrder = 0;
  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialOrder
  );

  if (cart.length === 0) return <h2>Cart is empty!</h2>;

  return (
    <div>
      {cart.map((product, i) => (
        <div key={i}>
          <h3>Id: {product.id}</h3>
          <h3>Name: {product.name}</h3>
          <h3>Price: {product.price}</h3>
        </div>
      ))}
      <button onClick={handleCart}>{`Buy Order (total ${totalOrder})`}</button>
    </div>
  );
};

export default Page;
