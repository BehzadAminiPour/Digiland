import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const themes = {
  dracula: "dracula",
  winter: "winter",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.dracula;
};
export default function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { dracula, winter } = themes;
    const newTheme = theme === dracula ? winter : dracula;
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { numItemsInCart } = useSelector((store) => store.cart);

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            DG
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            {/* sun icon*/}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon*/}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md mr-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-primary badge-sm indicator-start">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
