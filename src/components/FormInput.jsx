/* eslint-disable react/prop-types */


export default function FormInput({type,label,name,defaultValue}) {
  return (
    <div className='form-control'>
    <label htmlFor={name} className='label'>
      <span className='label-text capitalize'>{label}</span>
    </label>
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      className={`input input-bordered`}
    />
  </div>
  )
}
