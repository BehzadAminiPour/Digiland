import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";

export default function Cart() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-center mb-3">بررسی سبد خرید</h3>
        <div className="m-2 rounded-md border-2 p-2">
          <p>گوشی سامسونگ</p>
          <hr className="my-2" />
          <div className="my-2 flex justify-between">
            <span>قیمت : </span>
            <span>15000000</span>
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
        <div className="p-2 m-2">
          <hr className="my-3"/>
          <div className="flex justify-between">
            <span> مبلغ کل سبد خرید : </span>
            <span>15000000 تومان</span>
          </div>
          <hr className="my-3" />
        </div>
        <p className="text-center my-3">
          <button className="text-sm bg-green-500 rounded-md p-1 text-slate-50">ثبت سفارش</button>
        </p>
        <p className="text-center my-3">
        <button className="text-sm bg-red-400 rounded-md p-1 text-slate-50">بازگشت</button>
        </p>
      </div>
    </section>
  );
}
