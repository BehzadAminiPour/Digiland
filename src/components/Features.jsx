import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
export default function Features() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const newiest = cartItems.filter((item) => item.new === true);

  return (
    <>
      {isLoading ? (
        <div className="flex h-[100vh] items-center justify-center text-center">
          <p className="loader"></p>
        </div>
      ) : (
        <section className="my-7">
          <div className="mb-5 flex flex-col items-center">
            <h3 className="mb-2  text-center text-sm font-semibold text-gray-500 sm:text-lg">
              جدیدترین محصولات
            </h3>
            <hr className="w-[6rem] border-b sm:w-[8rem]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {newiest.map((product) => (
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
