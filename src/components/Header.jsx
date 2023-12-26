import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-start">
        <div className="flex items-center gap-x-2 sm:gap-x-8">
          <p className="text-xs sm:text-sm">سلام بهزاد</p>
          <button className="btn btn-outline btn-primary btn-xs ml-1">ورود</button>
        </div>

        <div className="flex items-center justify-center gap-x-6">
          <Link to="/login" className="link-hover link text-xs sm:text-sm">
            ثبت نام / مهمان
          </Link>
          <Link to="/register" className="link-hover link text-xs sm:text-sm">
           عضویت
          </Link>
        </div>
      </div>
    </header>
  );
}
