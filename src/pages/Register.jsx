/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("ثبت نام با موفقیت انجام شد");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "لطفا اطلاعات خود را دوباره چک کنید";
    toast.error(errorMessage);
    return null;
  }
};
const handleForm = () => {
  toast.error("لطفا جاهای خالی رو پر کنید!");
};

export default function Register() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card flex w-80 flex-col gap-y-4 bg-base-100 p-8 shadow-lg sm:w-96"
      >
        <h4 className="text-center text-3xl font-bold">عضویت</h4>
        <FormInput
          type="text"
          label="نام کاربری"
          name="username"
          required={true}
        />
        <FormInput type="email" label="ایمیل" name="email" required={true} />
        <FormInput
          type="password"
          label="رمز عبور"
          name="password"
          required={true}
        />
        <div className="mt-4">
          <SubmitBtn text="ثبت نام" />
        </div>
        <p className="text-center">
          در حال حاضر عضو هستید؟
          <Link
            to="/login"
            className="link-hover link link-primary mr-2 capitalize"
          >
            ورود
          </Link>
        </p>
        <Link
          to="/"
          className="link-hover link link-secondary text-center text-sm"
        >
          بازگشت به خانه
        </Link>
      </Form>
    </section>
  );
}
