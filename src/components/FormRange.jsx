/* eslint-disable react/prop-types */
import { useState } from 'react';
const FormRange = ({ label, name, size, price }) => {
  const step = 1000000;
  const maxPrice = 1000000000;
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
        min={5000000}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>حداقل : 5000000</span>
        <span className='font-bold text-md'>حداکثر : {maxPrice}</span>
      </div>
    </div>
  );
};
export default FormRange;
