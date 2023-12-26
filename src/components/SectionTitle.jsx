/* eslint-disable react/prop-types */

export default function SectionTitle({ text }) {
 
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className="text-3xl font-medium capitalize tracking-wider text-center">{text}</h2>
    </div>
  );
}
