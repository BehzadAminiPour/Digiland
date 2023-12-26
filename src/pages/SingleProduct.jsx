/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

export const loader = async ({ params }) => {
  const products = await getProducts(`/products/${params.id}`);
  return { products };
};

export default function SingleProduct() {
  const { products } = useLoaderData();
  console.log(products);

  return <h1 className="text-4xl"> تک محصول</h1>;
}
