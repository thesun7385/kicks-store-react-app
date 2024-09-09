import SignIn from "../components/SignIn";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
      </Helmet>
      <section className="min-h-screen">
        <div className="px-5 space-y-6">
          {/* Breadcrumbs */}
          <div className="breadcrumbs font-inter  text-zinc-700 text-md sm:text-lg">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <SignIn />
      </section>
    </>
  );
}
