import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Helmet } from "react-helmet";
import MenProductComponent from "../components/Product/MenProductComponent";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Men</title>
      </Helmet>
      <section className="min-h-screen">
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
                <Link to="/product/men">Men</Link>
              </li>
            </ul>
          </div>

          {/* Render Men shoes */}

          <MenProductComponent />
        </div>
      </section>
    </>
  );
}
