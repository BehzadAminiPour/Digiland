import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card flex w-80 flex-col gap-y-4 bg-base-100 p-8 shadow-lg sm:w-96"
      >
        <h4 className="text-center text-3xl font-bold">ورود</h4>
        <FormInput type="email" label="ایمیل" name="identifier" />
        <FormInput type="password" label="رمز ورود" name="password" />
        <div className="mt-4">
          <SubmitBtn text="ورود" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          ورود مهمان
        </button>
        <p className="text-center">
          هنوز عضو نشده اید؟
          <Link
            to="/register"
            className="link-hover link link-primary mr-2 capitalize"
          >
            عضویت
          </Link>
        </p>
      </Form>
    </section>
  );
}
