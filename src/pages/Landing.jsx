/* eslint-disable react-refresh/only-export-components */
import Faq from "../components/Faq";

import { Hero } from "../components";
import Services from "../components/Services";
import { getProducts } from "../services/apiProducts";
import FeaturedProduct from "../components/FeaturedProduct";

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
