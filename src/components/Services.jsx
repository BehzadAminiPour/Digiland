import ersalImg from "../assets/ersal.jpg";
import tanavoImg from "../assets/tanavo.jpg";
import pardakhtImg from "../assets/pardakht.jpg";
import zemanatImg from "../assets/zemanat.jpg";
export default function Services() {
  return (
    <section className="py-3 bg-slate-50">
      <div className="mb-5 flex flex-col items-center">
        <h3 className="mb-2  text-center text-sm font-semibold text-gray-500 sm:text-lg">
          چرا فروشگاه ما
        </h3>
        <hr className="w-[6rem] border-b sm:w-[8rem]" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="mx-2 my-5 flex flex-col items-center justify-center rounded-md border-2 border-slate-200 ">
          <div className="py-3">
            <img src={ersalImg} alt="ارسال فوری" className="w-16 rounded-md" />
          </div>
          <div className="my-2 flex flex-col items-center py-2">
            <h3 className="font-semibold text-red-500">ارسال فوری</h3>
            <p className="py-2 text-sm">روش‌های ارسال متنوع</p>
          </div>
        </div>
        <div className="mx-2 my-5 flex flex-col items-center justify-center rounded-md border-2 border-slate-200 ">
          <div className="py-3">
            <img
              src={zemanatImg}
              alt="ارسال فوری"
              className="w-16 rounded-md"
            />
          </div>
          <div className="my-2 flex flex-col items-center py-2">
            <h3 className="font-semibold text-red-500"> ضمانت اصالت کالا</h3>
            <p className="py-2 text-sm">محصولات موجود اصل هستند</p>
          </div>
        </div>
        <div className="mx-2 my-5 flex flex-col items-center justify-center rounded-md border-2 border-slate-200 ">
          <div className="py-3">
            <img src={tanavoImg} alt="ارسال فوری" className="w-16 rounded-md" />
          </div>
          <div className="my-2 flex flex-col items-center py-2">
            <h3 className="font-semibold text-red-500"> تنوع محصولات</h3>
            <p className="py-2 text-sm"> هر آن‌چه نیاز دارید</p>
          </div>
        </div>
        <div className="mx-2 my-5 flex flex-col items-center justify-center rounded-md border-2 border-slate-200 ">
          <div className="py-3">
            <img
              src={pardakhtImg}
              alt="ارسال فوری"
              className="w-16 rounded-md"
            />
          </div>
          <div className="my-2 flex flex-col items-center py-2">
            <h3 className="font-semibold text-red-500">پرداخت مطمئن</h3>
            <p className="py-2 text-sm"> با درگاه‌های متنوع و مطمئن</p>
          </div>
        </div>
      </div>
    </section>
  );
}
