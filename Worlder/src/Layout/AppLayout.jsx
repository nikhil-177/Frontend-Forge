import { Outlet } from "react-router-dom";
import { Footer } from "../components/UI/Footer";
import { Header } from "../components/UI/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
