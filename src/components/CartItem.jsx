/* eslint-disable react/prop-types */
import { generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {

  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
 
    dispatch(removeItem({ id }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ id, amount: parseInt(e.target.value) }));
  };

  const { id, title, price, img, amount, company } =
    cartItem;

  return (
    <article
      key={id}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
      />
      {/* INFO */}
      <div className='sm:mx-14 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>
         شرکت سازنده :  {company} 
        </h4>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text text-secondary'>تعداد</span>
          </label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className='mt-2 link link-accent link-hover text-sm'
          onClick={removeItemFromTheCart}
        >
          حذف
        </button>
      </div>

      {/* PRICE */}
      <p className='font-medium text-sm sm:ml-auto'> قیمت واحد : {price.toLocaleString()} تومان</p>
    </article>
  );
};
export default CartItem;
