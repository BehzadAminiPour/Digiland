import { FaTelegramPlane } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footer items-center bg-neutral p-8 text-neutral-content">
      <aside className="grid-flow-col items-center place-self-center">
        <FaRegCopyright size={24} />
        <p>طراحی و پیاده سازی توسط بهزاد امینی</p>
      </aside>
      <nav className="grid-flow-col gap-4 place-self-center ">
        <FaInstagram size={26}/>
        <FaTelegramPlane size={26}/>
        <FaWhatsapp size={26}/>
      </nav>
    </footer>
  );
}
