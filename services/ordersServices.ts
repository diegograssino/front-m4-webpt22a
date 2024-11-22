import { Product } from "@/interfaces/products";
import { User } from "@/interfaces/user";

const apiURL = process.env.API_URL || "http://localhost:3001";

export const buyOrder = async (cart: Product[], user: User) => {
  const data = {
    userId: user.user.id,
    products: cart.map((product) => product.id),
  };

  const res = await fetch(`${apiURL}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: user.token,
    },
  });
  return res.json();
};
