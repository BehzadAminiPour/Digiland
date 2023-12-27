/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { generateAmountOptions } from "../utils";
//Loader
export const loader = async ({ params }) => {
  const response = await getProducts();
  const products = response.find((product) => product.id === +params.id);
  return { products };
};

export default function SingleProduct() {
  const { products } = useLoaderData();
  const [readMore, setReadMore] = useState(false);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const { img, title, price, description, company } = products;

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/products">محصولات</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={img}
          alt={title}
          className=" w-96 rounded-lg object-cover lg:w-full"
        />
        {/* PRODUCT */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            شرکت : {company}
          </h4>
          <p className="mt-3 text-xl">قیمت : {price} تومان</p>
          <h4 className="mt-6 text-xl font-bold text-neutral-content">
            مشخصات :
          </h4>
          <p className="mt-3 leading-8">
            {readMore ? description : `${description.substring(0, 200)} `}
            <button
              className="font-bold text-primary"
              onClick={() => setReadMore(!readMore)}
            >
              {" "}
              {readMore ? "کمتر" : "بیشتر"} ...
            </button>
          </p>

          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium capitalize -tracking-wider text-primary">
                تعداد
              </h4>
            </label>
            <select
              className="select select-bordered select-secondary select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">
              اضافه کن به سبد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
