
import { NavLink } from 'react-router-dom';
const links = [
    { id: 1, url: '/', text: 'خانه' },
    { id: 2, url: 'about', text: 'درباره ما' },
    { id: 3, url: 'products', text: 'محصولات' },
    { id: 4, url: 'cart', text: 'سبد' },
    { id: 5, url: 'checkout', text: 'چک کردن' },
    { id: 6, url: 'orders', text: 'سفارشات' },
  ];
  

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        // if ((url === 'checkout' || url === 'orders') && !user) return null;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  )
}
