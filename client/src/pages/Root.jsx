import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import Cart from "../components/Cart/Cart";

// This is root page
export default function Root() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <MainNavigation />
        <Cart />
        <div>
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
