import Hero from "../components/Hero";
import WelcomeMessage from "../components/WelcomeMessage";
import Category from "../components/Category";
import Recommendation from "../components/Recommendation";

// Home page component
export default function Home() {
  return (
    <>
      {/* Home section */}
      <section>
        <Hero />
        <WelcomeMessage />
        <Category />
        <Recommendation />
      </section>
    </>
  );
}
