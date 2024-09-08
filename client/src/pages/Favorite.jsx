import FavoriteList from "../components/FavoriteList";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Favorite() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favorites</title>
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
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>

          <div className="font-anton text-black uppercase text-5xl sm:text-6xl">
            Favorites
          </div>
        </div>

        {/* Favorite list */}
        <FavoriteList />
      </section>
    </>
  );
}
