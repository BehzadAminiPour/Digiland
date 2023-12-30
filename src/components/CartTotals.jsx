import { useSelector } from "react-redux";

export default function CartTotals() {
  const { cartTotal } = useSelector((store) => store.cart);
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        {/* <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>مجموع : </span>
          <span className="font-medium">{cartTotal}</span>
        </p> */}
        <p className='flex justify-between text-sm mt-4 pb-2'>
          <span>مجموع کل سفارشات : </span>
          <span className='font-medium'>{cartTotal}</span>
        </p>
      </div>
    </div>
  );
}
