import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

// This is root page
export default function Root() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <MainNavigation />
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
