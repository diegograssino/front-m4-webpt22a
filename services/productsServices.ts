import { Product } from "@/interfaces/products";
import { productsMock } from "@/mocks/products";

const apiURL = process.env.API_URL || "http://localhost:3001";
const fallbackMockEnabled = process.env.FALLBACK_MOCK
  ? process.env.FALLBACK_MOCK === "true"
  : false;

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${apiURL}/products`, { cache: "no-store" })
    .then((res) => res.json())
    .catch(() => {
      return fallbackMockEnabled ? productsMock : [];
    });

  return res as Product[];
};

export const getProduct = async (id: number): Promise<Product> => {
  const products = await getProducts();
  const res = products.filter((product) => product.id === id)[0];

  return res;
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const products = await getProducts();
  const res = products.slice(0, 3);

  return res;
};
