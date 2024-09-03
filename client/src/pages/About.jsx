import { Helmet } from "react-helmet";
import AboutMessage from "../components/AboutMessage";
import { Link } from "react-router-dom";
import Recommendation from "../components/Recommendation";
export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
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
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="font-anton text-black uppercase text-5xl sm:text-6xl">
            About us
          </div>
        </div>

        <AboutMessage />
        <Recommendation />
      </section>
    </>
  );
}
