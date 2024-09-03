import React from "react";
import aboutUsImg from "../assets/about-us.jpg";
import { Link } from "react-router-dom";

export default function AboutMessage() {
  return (
    <>
      {/* About container */}
      <div className="m-10 ">
        <div
          className="flex justify-center items-center sm:items-start 
        flex-col md:flex-row w-4/4 space-x-6"
        >
          {/* About image */}
          <div>
            <img
              src={aboutUsImg}
              alt="about-image"
              className="card h-[747px] w-[498px] object-cover"
            />
          </div>
          {/* About detail */}
          <div className="p-4 font-inter  w-full md:w-2/4">
            <div>
              <h1 className="font-anton text-black uppercase text-2xl md:text-6xl">
                We don’t just sell shoes-we build communities
              </h1>
            </div>
            <div className="font-inter text-black text-lg md:text-base font-light py-3 w-full ">
              <p>
                At our store, every pair of kicks represents a shared passion
                for style, comfort, and self-expression. We believe in creating
                a space where sneaker enthusiasts can connect, share their love
                for footwear, and discover the latest trends together. Whether
                you’re a collector, an athlete, or just someone who values a
                good pair of shoes, we’re here to help you step up your game.
                Join us, and let’s walk this journey together. It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
