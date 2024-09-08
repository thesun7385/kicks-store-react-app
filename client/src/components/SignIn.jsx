import { GoogleLogin } from "@react-oauth/google";

// singin component
export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="font-jost uppercase font-extrabold italic text-black text-4xl sm:text-5xl flex justify-center">
            <h1 className="">Kicks Store</h1>
          </div>
        </div>
        <h2 className="mt-10 text-center text-xl font-base leading-9 tracking-tight text-gray-900">
          Singin in to your account
        </h2>
        <div className="mt-4 flex w-full justify-center">
          {/* Sign-in with Google */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">OR </div>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                   ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 
                   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-slate-600 hover:text-slate-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                   ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg   bg-slate-800 
                px-3 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign in
              </button>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg  bg-slate-800 
                px-3 py-3  text-base  font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Create account
              </button>
            </div>
          </form>
          <p className="mt-10 text-sm text-gray-500">
            By continuing, I agree to Kicks store's Privacy Policy and Terms of
            Use.
          </p>
        </div>
      </div>
    </>
  );
}
