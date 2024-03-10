"use client";
import {
  DiscordLogoIcon,
  DownloadIcon,
  EnterIcon,
  EnvelopeOpenIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import localFont from "next/font/local";
import background from "@/assets/images/Clip path group.svg";
import sharks from "@/assets/images/sharks.svg";
import sharks2 from "@/assets/images/sharks 2.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";

const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <ParallaxProvider>
      <div className="h-[calc(100dvh-60px)] w-11/12 mx-auto flex items-center justify-center">
        <img
          src={background.src}
          alt="background"
          className="absolute top-0 object-cover h-screen w-screen -z-50"
        />
        <img
          src={sharks.src}
          alt="sharks"
          className="absolute lg:top-20 object-cover lg:h-screen lg:w-screen -z-40 hidden lg:block"
        />
        <img
          src={sharks2.src}
          alt="sharks2"
          className="absolute top-50 object-cover h-screen w-full -z-40 lg:hidden"
        />
        <div className="flex-col items-center justify-center md:w-10/12 lg:-ml-14 md:flex-row md:flex">
          <div className="flex justify-center items-center">
            <Parallax speed={5}>
            <div className="md:hidden border border-[#0044D1] rounded-lg backdrop-blur-md py-1 w-max px-2 border-dashed">
              23rd - 24th March
            </div>
            </Parallax>
            </div>
          <div className="text-center w-80 mt-16 mr-5 self-start text-2xl hidden lg:block ">
            <Parallax speed={10}>
              <div className="border border-[#0044D1] px-5 py-3 rounded-xl backdrop-blur-md border-dashed">
                India&apos;s Only Shark-Tank Themed Hackathon !
              </div>
            </Parallax>
          </div>
          <div className="z-10">
            <div
              className={
                "text-[#FF5003] font-bold flex flex-col justify-center " +
                azonix.className
              }
            >
              <div className="md:text-9xl text-7xl text-center">Hack</div>
              <div className="md:text-9xl text-7xl flex gap-10 text-center items-center">
                <div>The</div>
                <div className="md:text-7xl text-5xl">2.0</div>
              </div>
              <div className="md:text-9xl text-7xl  text-center">Tank </div>
            </div>

            <p
              className={
                "pl-4 md:text-4xl text-2xl text-center pt-2  " + azonix.className
              }
            >
              Dare to dive in
            </p>

            <div className=" mt-5 items-center justify-center">
              <div className="flex flex-col gap-2 z-10 rounded items-center">
                <div
                  className="apply-button"
                  data-hackathon-slug="hack-the-tank-2"
                  data-button-theme="dark"
                  style={{ height: "44px", width: "312px", borderRadius: "8px"}}
                ></div>
                <a
                  href="https://discord.gg/RAvmqWZ55E"
                  className="bg-[#0044D1] h-[44px] w-[320px] rounded"
                >
                  <DiscordLogoIcon className="mr-2" />
                  Discord
                </a>
              </div>
            </div>
          </div>
          <Parallax speed={-10}>
            <div className="text-center self-center justify-self-center border border-[#0044D1] px-5 py-3 ml-5 mt-5 rounded-xl backdrop-blur-md text-2xl hidden md:block border-dashed">
              23rd - 24th March
            </div>
          </Parallax>
        </div>
      </div>
      </ParallaxProvider>
      );
}
