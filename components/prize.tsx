import React from "react";
import PrizeSection from "./prizeImage";
import { Button } from "./ui/button";

export default function Prize() {
  return (
    <section className="text-gray-400 body-font w-11/12 mx-auto" id="prizes">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-[#FF5003] tracking-widest font-medium title-font mb-1">
            WIN AWESOME PRICES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            India&apos;s Only Shark-Tank Themed Hackathon !
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            Immerse yourself in an unparalleled hackathon experience with our
            exclusive Shark Tank event! Five industry leaders, entrepreneurs,
            and investors will present unique challenges, giving participants a
            chance to showcase innovative solutions directly to them. Judges
            will carefully evaluate and award one outstanding team per
            challenge, providing valuable insights and exclusive prizes. Seize
            the opportunity to impress industry titans and elevate your project
            to new heights!
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-[#FF5003] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-[#FF5003] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Neptune
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-[#FF5003] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Melanchole
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-[#FF5003] inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
