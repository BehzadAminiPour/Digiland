import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems)
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.id } cartItem={item} />;
      })}
    </>
  );
}
