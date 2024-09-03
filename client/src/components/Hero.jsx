import heroVideo from "../assets/heroVideo.mp4";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="flex flex-col-row justify-center items-center  
    sm:justify-start sm:items-start sm:flex-col-reverse"
    >
      {/* Auto play video */}
      <video autoPlay loop muted className="object-cover w-full h-[750px]">
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Content box */}

      <div
        className="absolute px-14 py-14 space-y-5  
      grid sm:justify-items-start justify-items-center"
      >
        <div className="bg-white">
          <h1 className="font-anton text-black uppercase text-4xl p-2 sm:text-7xl md:text-8xl">
            Shoes you need
          </h1>
        </div>
        <h2 className="font-inter text-2xl md:text-4xl font-extrabold text-white">
          Get your best kicks!
        </h2>
        <NavLink to="/product">
          <button
            className="font-inter text-black  text-2xl font-extrabold 
          italic bg-white px-5 py-2.5 rounded-2xl hover:bg-slate-200"
          >
            Shop
          </button>
        </NavLink>
      </div>
    </div>
  );
}
