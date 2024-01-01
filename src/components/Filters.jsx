import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";

export default function Filters() {
  const { params } = useLoaderData();
  const { search, company, price } = params;
  const list = ["همه","samsung", "xiaomi", "apple"];
  return (
    <Form className="grid items-center gap-x-4 gap-y-8 rounded-md bg-base-200  px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="جستجوی محصول"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      {/* COMPANIES */}
      <FormSelect
        label="بر اساس شرکت سازنده"
        name="company"
        list={list}
        size="select-sm"
        defaultValue={company}
      />

      {/* PRICE */}
      <FormRange
        name="price"
        label="بر اساس قیمت"
        size="range-sm"
        price={price}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm sm:mt-5 md:mt-0">
        جستجو
      </button>
      <Link to="/products" className="btn btn-secondary btn-sm">
        پاک کردن
      </Link>
    </Form>
  );
}
