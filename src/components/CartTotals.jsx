import { useSelector } from "react-redux";

export default function CartTotals() {
  const { cartTotal } = useSelector((store) => store.cart);
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className='flex flex-col items-center  text-sm mt-4 pb-2'>
          <span > مجموع  سفارشات : </span>
          <span className='font-medium mt-2'> {cartTotal.toLocaleString()} تومان </span>
        </p>
      </div>
    </div>
  );
}
