/* eslint-disable react/prop-types */
import { useState } from 'react';
const FormRange = ({ label, name, size, price }) => {
  const step = 1000000;
  const minPrice=5000000;
  const maxPrice = 100000000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer mt-2'>
        <span className='label-text capitalize'>{label}</span>
        <span>{selectedPrice}</span>
      </label>
      <input
        style={{direction:"ltr"}}
        type='range'
        name={name}
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}

      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className=' text-md'>حداقل : 5,000,000</span>
        <span className=' text-md'>حداکثر : {maxPrice.toLocaleString()}</span>
      </div>
    </div>
  );
};
export default FormRange;
