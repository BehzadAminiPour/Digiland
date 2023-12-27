/* eslint-disable react-refresh/only-export-components */
import { Filters,  ProductsContainer } from "../components";
import { getProducts } from "../services/apiProducts";

//Loader
export const loader = async () => {
  const products = await getProducts()
  return {products}
};

export default function Products() {
  
  return (
    <>
      <Filters />
      <ProductsContainer />
    
    </>
  );
}
