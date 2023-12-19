import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";

// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { fetchItems } from "../features/cart/cartSlice";
export default function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  // const dispatch = useDispatch();


  return (
    <section className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-3 text-center">بررسی سبد خرید</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="m-2 rounded-md border-2 p-2">
            <p>{item.title}</p>
            <hr className="my-2" />
            <div className="my-2 flex justify-between">
              <span>قیمت : </span>
              <span>{item.price}</span>
            </div>
            <div className="my-2 flex justify-between">
              <span>تعداد : </span>
              <div className="flex items-center justify-center">
                <LuMinusCircle className="cursor-pointer" />
                <span className="mx-1">2</span>
                <LuPlusCircle />
              </div>
            </div>
            <div className="my-2 flex justify-between">
              <span>جمع قیمت : </span>
              <span>15000000</span>
            </div>
            <div className="flex justify-end">
              <p>حذف</p>
            </div>
          </div>
        ))}
        <div className="m-2 p-2">
          <hr className="my-3" />
          <div className="flex justify-between">
            <span> مبلغ کل سبد خرید : </span>
            <span>15000000 تومان</span>
          </div>
          <hr className="my-3" />
        </div>
        <p className="my-3 text-center">
          <button className="rounded-md bg-green-500 p-1 text-sm text-slate-50">
            ثبت سفارش
          </button>
        </p>
        <p className="my-3 text-center">
          <button className="rounded-md bg-red-400 p-1 text-sm text-slate-50">
            بازگشت
          </button>
        </p>
      </div>
    </section>
  );
}
