import SignIn from "../components/SignIn";
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
      </Helmet>
      <SignIn />
    </>
  );
}
