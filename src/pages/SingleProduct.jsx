import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchItems } from "../features/cart/cartSlice";
export default function SingleProducts() {
  const { productId } = useParams();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
 

  useEffect(
    function () {
      dispatch(fetchItems());
    },
    [dispatch],
  );

  const myProduct = cartItems.find((item) => item.id === +productId);

  const handleAddToCart = () => {
    dispatch(addToCart(myProduct.id));
  
  };
  return (
    <>
      {isLoading ? (
        <div className="flex h-[100vh] items-center justify-center text-center">
          <p className="loader"></p>
        </div>
      ) : (
        <section className="mx-auto max-w-5xl">
          {myProduct && (
            <div>
              <div className="mx-4 my-5 flex flex-col items-center rounded-md border-2  p-2  md:flex-row md:justify-around">
                <div className="flex flex-col items-center  md:w-[50%]">
                  <img src={myProduct.img} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center md:w-[50%]">
                  <h4 className="my-2 text-center text-sm font-semibold text-stone-600">
                    {myProduct.title}
                  </h4>

                  <p className="my-3 h-80 overflow-scroll overflow-x-hidden p-1 text-xs">
                    {myProduct.description}
                  </p>

                  {myProduct.stock && (
                    <p className="my-2 text-sm">
                      قیمت : {myProduct.price} تومان
                    </p>
                  )}

                  {myProduct.stock && (
                    <Link to="/cart"
                      onClick={handleAddToCart}
                      className="mb-3 rounded-md bg-green-500 px-5 py-1 text-sm text-stone-50"
                    >
                      افزودن به سبد
                    </Link>
                  )}
                  {!myProduct.stock && (
                    <p className="text-red-500">موجود نیست</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
