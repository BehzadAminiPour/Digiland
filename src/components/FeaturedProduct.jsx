import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

export default function FeaturedProduct() {


  return (
    <>
      <div className="pt-24">
        <SectionTitle text="جدیدترین محصولات" />
        <ProductsGrid />
      </div>
    </>
  );
}
