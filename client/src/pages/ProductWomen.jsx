import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import WomenProductComponent from "../components/Product/WomenProductComponent";

export default function Proudct() {
  // Get current location
  const location = useLocation();

  // Reset scroll position
  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Women</title>
      </Helmet>
      <section className="min-h-screen mt-24">
        {/* Header box */}
        <div className="px-5 space-y-6">
          {/* Breadcrumbs */}
          <div className="breadcrumbs font-inter  text-zinc-700 text-md sm:text-lg">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop All</Link>
              </li>
              <li>
                <Link to="/product/women">Women</Link>
              </li>
            </ul>
          </div>

          {/* Render women box */}

          <WomenProductComponent />
        </div>
      </section>
    </>
  );
}
