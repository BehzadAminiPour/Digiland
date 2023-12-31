import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-start">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">سلام {user.username}</p>
            <button onClick={handleLogout} className="btn btn-outline btn-primary btn-xs ml-1">
              خروج
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-6">
            <Link to="/login" className="link-hover link text-xs sm:text-sm">
              ثبت نام / مهمان
            </Link>
            <Link to="/register" className="link-hover link text-xs sm:text-sm">
              عضویت
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
