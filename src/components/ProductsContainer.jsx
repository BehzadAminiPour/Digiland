import ProductsGrid from "./ProductsGrid";
import {useLoaderData} from 'react-router-dom'

export default function ProductsContainer() {
  const { products} = useLoaderData()
  const totalProducts= products.length; 
  return (
    <>
    {/* HEADER */}
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
      <h4 className='font-medium text-md'>
        {totalProducts} محصول یافت شد
      </h4>

    </div>
    {/* PRODUCTS */}
    <div>
      {totalProducts === 0 ? (
        <h5 className='text-2xl mt-16 text-center'>
          متاسفانه محصولی یافت نشد!
        </h5>
      ) : 
        <ProductsGrid />
       }
    </div>
  </>
  );
}
