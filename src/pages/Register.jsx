import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card flex w-80 flex-col gap-y-4 bg-base-100 p-8 shadow-lg sm:w-96"
      >
        <h4 className="text-center text-3xl font-bold">عضویت</h4>
        <FormInput type="text" label="نام کاربری" name="username" />
        <FormInput type="email" label="ایمیل" name="email" />
        <FormInput type="password" label="رمز عبور" name="password" />
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
      </Form>
    </section>
  );
}
