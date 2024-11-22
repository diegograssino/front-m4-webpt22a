import { Product } from "@/interfaces/products";
import { createContext, useEffect, useState } from "react";

interface CartContext {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  clearCart: () => void;
}

export const cartContext = createContext<CartContext>({
  cart: [],
  setCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <cartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
