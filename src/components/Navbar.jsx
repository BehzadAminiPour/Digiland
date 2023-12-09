import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="mx-auto mb-3 flex max-w-5xl justify-between border-b border-stone-200 bg-slate-50 py-2">
      <div className="mr-5 flex items-center justify-center gap-7 text-stone-600 sm:mr-10 sm:flex sm:gap-16">
        <Link to="/" className="flex flex-col items-center">
          <FaHome size={24} />
          <p className="text-xs">خانه</p>
        </Link>
        <Link to="/products" className="flex flex-col items-center">
          <BiCategory size={24} />
          <p className="text-xs">محصولات</p>
        </Link>
        <Link to="/cart" className="flex flex-col items-center">
          <FaShoppingCart size={24} />
          <p className="text-xs">سبد</p>
        </Link>
      </div>
      <div className="ml-2 flex items-center justify-center">
        <h1 className="text-red-500 ">دیجی لند</h1>
      </div>
    </nav>
  );
}
