/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("ورود با موفقیت انجام شد");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "لطفا اطلاعات خود را دوباره چک کنید";
      toast.error(errorMessage);
      return null;
    }
  };

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("خوش اومدی کاربر مهمان");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("خطا در ورود کاربر مهمان .لطفا دوباره تلاش کنید");
    }
  };

  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card flex w-80 flex-col gap-y-4 bg-base-100 p-8 shadow-lg sm:w-96"
      >
        <h4 className="text-center text-3xl font-bold">ورود</h4>
        <FormInput type="email" label="ایمیل" name="identifier" required={true}/>
        <FormInput type="password" label="رمز ورود" name="password" required={true}/>
        <div className="mt-4">
          <SubmitBtn text="ورود" />
        </div>
        <button
          onClick={loginAsGuestUser}
          type="button"
          className="btn btn-secondary btn-block"
        >
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
