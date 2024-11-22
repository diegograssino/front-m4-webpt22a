import { Product } from "@/interfaces/products";
import Link from "next/link";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <article className="bg-secondary h-20 transition ease-in-out delay-150 hover:scale-105">
        <h4>{product.name}</h4>
      </article>
    </Link>
  );
};

export default Card;
