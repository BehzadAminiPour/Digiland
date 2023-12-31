
import { NavLink } from 'react-router-dom';
const links = [
    { id: 1, url: '/', text: 'خانه' },
    { id: 2, url: 'about', text: 'درباره ما' },
    { id: 3, url: 'products', text: 'محصولات' },
   

  ];
  

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
 
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
