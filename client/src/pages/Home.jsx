import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import WelcomeMessage from "../components/WelcomeMessage";
import Collection from "../components/Collection";
import Recommendation from "../components/Recommendation";

// Home page component
export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kicks Stores</title>
      </Helmet>
      {/* Home section */}
      <section>
        <Hero />
        <WelcomeMessage />
        <Collection />
        <Recommendation />
      </section>
    </>
  );
}
