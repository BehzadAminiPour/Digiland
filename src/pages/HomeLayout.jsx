import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <Outlet />
    </>
  );
}
