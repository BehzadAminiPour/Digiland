import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <>
        <SectionTitle text="سبد خرید شما خالی است !" />
        <div className="text-center mt-4">
          <Link to="/products" className="btn btn-primary btn-sm">
            برو به محصولات
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <SectionTitle text="سبد خرید" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pr-4">
          <CartTotals />

          {/* <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
            proceed to checkout
          </Link> */}

          <Link to="/login" className="btn btn-primary btn-block mt-8">
            please login
          </Link>
        </div>
      </div>
    </>
  );
}
