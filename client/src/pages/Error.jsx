import { NavLink } from "react-router-dom";
export default function Error() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-slate-700">Error 404</p>
          <h1 className="font-inter mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Oops! It looks like the page you're trying to reach doesn't exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to="/">
              <a className="rounded-xl bg-slate-600 px-6 py-5 text-lg font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
                Go back home
              </a>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
