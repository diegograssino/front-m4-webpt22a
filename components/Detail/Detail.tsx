"use client";
import { cartContext } from "@/contexts/cartContext";
import { UserContext } from "@/contexts/userContext";
import { Product } from "@/interfaces/products";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface DetailProps {
  product: Product;
}

const Detail = ({ product }: DetailProps) => {
  const { isLogged } = useContext(UserContext);
  const { cart, setCart } = useContext(cartContext);
  const isInCart = cart.some((p) => p.id === product.id);
  const router = useRouter();
  const handleBuy = () => {
    if (isLogged()) {
      alert("Added!");
      setCart([...cart, product]);
    } else {
      alert("First login!");
      router.push("/login");
    }
  };

  return (
    <article className="bg-secondary h-20 transition ease-in-out delay-150 hover:scale-105">
      <h4>{product.name}</h4>
      {!isInCart ? (
        <button className="border-2 border-black px-4 py-2" onClick={handleBuy}>
          Add to cart
        </button>
      ) : (
        <Link className="border-2 border-black" href="/cart">
          Buy your cart
        </Link>
      )}
    </article>
  );
};

export default Detail;
