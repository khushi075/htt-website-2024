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
    <>
      <div className="h-[calc(100dvh-60px)] w-11/12 mx-auto flex items-center justify-center ">
        <img
          src={background.src}
          className="absolute top-0 object-cover h-screen w-screen -z-50"
        />
        <img
          src={sharks.src}
          className="absolute lg:top-20 object-cover lg:h-screen lg:w-screen -z-40 hidden lg:block"
        />
        <img
          src={sharks2.src}
          className="absolute top-50 object-cover h-screen w-full -z-40 lg:hidden"
        />
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
                style={{ height: "44px", width: "312px" }}
              ></div>
              <Button
                variant="outline"
                className="bg-[#0044D1] h-[44px] w-[320px] rounded-none"
              >
                <DiscordLogoIcon className="mr-2" />
                Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
