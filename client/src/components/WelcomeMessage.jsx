// Home content component
export default function WelcomeMessage() {
  return (
    // Welcom home box
    <div className="flex justify-center mt-14">
      {/* welcome to the home content */}
      <div className="text-center m-14 space-y-6 sm:max-w-2xl">
        <h1 className="font-anton text-black  uppercase text-2xl sm:text-5xl md:text-6xl">
          Explore your own style!
        </h1>

        <p className="font-inter text-black  text-base sm:text-xl font-light ">
          Our extensive collection features top brands and exclusive designs,
          curated to suit every taste and occasion. From casual streetwear to
          athletic performance.
        </p>

        <button
          className="font-inter text-base font-extrabold italic text-white
       bg-zinc-900 p-3 rounded-xl"
        >
          See more
        </button>
      </div>
    </div>
  );
}
