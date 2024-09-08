import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import KidsProductComponent from "../components/Product/KidsProductComponent";

export default function Proudct() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kids</title>
      </Helmet>
      <section className="min-h-screen">
        {/* Header box */}
        <div className="px-5 space-y-6">
          {/* Breadcrumbs */}
          <div className="breadcrumbs font-inter font-light text-zinc-500 text-md sm:text-lg">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop All</Link>
              </li>
              <li>
                <Link to="/product/kids">Kids</Link>
              </li>
            </ul>
          </div>

          {/* Select box */}

          <KidsProductComponent />
        </div>
      </section>
    </>
  );
}
