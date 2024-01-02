/* eslint-disable react-refresh/only-export-components */
import { Hero ,FeaturedProduct,Faq,Services } from "../components";
import { getProducts } from "../services/apiProducts";


export const loader = async () => {
  const products = await getProducts();

  return {products};
};

export default function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Faq />
    </>
  );
}
