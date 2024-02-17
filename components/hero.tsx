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

const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function Hero() {
  return (
    <ParallaxProvider>
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
        <div className="flex-col items-center justify-center md:flex-row md:flex ">
          <div className="md:hidden text-center">
            <Parallax speed={8}>23rd - 24th March</Parallax>
          </div>
          <div className="text-center w-80 mt-10 mr-5 self-start text-2xl hidden lg:block">
            <Parallax speed={10}>
              <div className="border border-[#0044D1] px-5 py-3 rounded-xl backdrop-blur-md">
                India&apos;s Only Shark-Tank Themed Hackathon !
              </div>
            </Parallax>
          </div>
          <div className="z-10">
            <Parallax speed={5}>
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
            </Parallax>
            <Parallax speed={-2}>
              <p
                className={
                  "pl-4 md:text-4xl text-2xl text-center pt-2  " +
                  azonix.className
                }
              >
                Dare to dive in
              </p>
            </Parallax>
            <div className="flex mt-5 items-center justify-center">
              <div className="z-10">
                <Button variant="outline" className="bg-[#0044D1] h-[48px]">
                  <DiscordLogoIcon className="mr-2 " />
                  Discord
                </Button>
                <Button
                  variant="secondary"
                  className="ml-2 bg-[#FF5003] h-[48px] "
                >
                  <EnterIcon className="mr-2" />
                  Register Now
                </Button>
              </div>
            </div>
          </div>
          <Parallax speed={-10}>
            <div className="text-center self-center justify-self-center border border-[#0044D1] px-5 py-3 ml-5 mt-5 rounded-xl backdrop-blur-md text-2xl hidden md:block">
              23rd - 24th March
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
