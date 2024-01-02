/* eslint-disable react-refresh/only-export-components */
import { Filters, ProductsContainer } from "../components";
import { getProducts } from "../services/apiProducts";

//Loader
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const products = await getProducts(params);
  return { products, params };
};

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
    </>
  );
}
