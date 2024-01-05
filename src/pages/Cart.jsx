import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Cart() {
  const user = useSelector((store) => store.user.user);
  const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <>
        <SectionTitle text="سبد خرید شما خالی است !" />
        <div className="mb-56 mt-4 text-center">
          <Link to="/products" className="btn btn-primary btn-sm">
            برو به محصولات
          </Link>
        </div>
      </>
    );
  }

  const handleOrder = () => {
    toast.success(" سفارش شما با موفقیت ثبت شد");
  };

  return (
    <>
      <SectionTitle text="سبد خرید" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pr-4">
          <CartTotals />
          {user ? (
            <button
              onClick={handleOrder}
              className="btn btn-primary btn-block mt-8"
            >
              ثبت سفارش
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              ثبت نام
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
