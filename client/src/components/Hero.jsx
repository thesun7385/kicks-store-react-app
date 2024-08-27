import heroVideo from "../assets/heroVideo.mp4";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse item-center reative">
      {/* Auto play video */}
      <video autoPlay loop muted className="object-cover w-full h-[750px]">
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Content box */}
      <div className="absolute content-end px-14 py-14 space-y-5">
        <div className="bg-white">
          <h1 className="font-anton uppercase text-8xl p-3">Shoes you need</h1>
        </div>
        <h2 className="font-inter text-4xl font-extrabold text-white">
          Get your best kicks!
        </h2>
        <button className="font-inter text-2xl font-extrabold italic bg-white px-5 py-2.5 rounded-2xl">
          Shop
        </button>
      </div>
    </div>
  );
}
