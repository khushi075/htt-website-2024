import React from "react";
import PrizeSection from "./prizeImage";
import { Button } from "./ui/button";
import localFont from "next/font/local";

const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function Prize() {
  return (
    <section className="text-gray-400 body-font w-11/12 mx-auto" id="prizes">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-[#FF5003] tracking-widest font-medium title-font mb-1">
            WIN AWESOME PRIZES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            India&apos;s Only Shark-Tank Themed Hackathon !
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
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
        <div
          className={"md:text-6xl text-4xl text-center  " + azonix.className}
        >
          Tracks Coming Soon
        </div>
      </div>
    </section>
  );
}
