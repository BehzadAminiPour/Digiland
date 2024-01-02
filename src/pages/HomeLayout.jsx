import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar,Footer } from "../components";


export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element pt-4 pb-20">
          <Outlet />
        </section>
      )}
      <Footer/>
    </>
  );
}
