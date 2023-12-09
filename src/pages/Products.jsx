import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/apiProducts";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(function () {
    setTimeout(() => {
      getProducts().then((data) => setProducts(data));
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex h-[100vh] items-center justify-center text-center">
          <p className="loader"></p>
        </div>
      ) : (
        <section className="mx-auto max-w-5xl">
          <div className="m-2 my-7 bg-slate-100 p-1">
            <form>
              <div className="my-2">
                <label htmlFor="">نام محصول :</label>
                <input type="text" className="bg-slate-50" />
              </div>
              <div className="my-2">
                <label htmlFor="">نام شرکت : </label>
                <select name="company" id="company" className="bg-slate-50">
                  <option value="xiaomi">شیایومی</option>
                  <option value="samsung">سامسونگ</option>
                  <option value="apple">اپل</option>
                </select>
              </div>
              <div className="my-2">
                <label htmlFor="" className="block">
                  قیمت :
                </label>
                <input type="range" min={0} max={100000000} />
              </div>
            </form>
          </div>
          <div className="m-2">
            <p>30 محصول موجود</p>
            <hr className="mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="mx-4 my-5 flex flex-col items-center rounded-md border-2 p-2"
              >
                <div className="flex flex-col items-center">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h4 className="my-2 text-center text-sm font-semibold text-stone-600">
                    {product.title}
                  </h4>
                  <p className="my-2 text-sm">قیمت : {product.price} تومان</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
