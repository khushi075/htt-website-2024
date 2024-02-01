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

const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function Hero() {
  return (
    <div className="h-[calc(100dvh-60px)] flex items-center justify-center">
      <img
        src={background.src}
        className="absolute object-cover h-screen w-screen -z-50"
      />
      <div>
        <div
          className={
            "text-[#FF5003] font-bold flex flex-col justify-center " +
            azonix.className
          }
        >
          <div className="text-9xl text-center">Hack</div>
          <div className="text-9xl flex gap-10 text-center items-center">
            <div>The</div>
            <div className="text-7xl">2.0</div>
          </div>

          <div className="text-9xl  text-center">Tank </div>
        </div>
        <p className={"pl-4 text-4xl text-center  pt-2 " + azonix.className}>
          Dare to dive in
        </p>
        <div className="flex mt-5 items-center justify-center">
          <div>
            <Button variant="outline" className="bg-blue-500">
              <DiscordLogoIcon className="mr-2" />
              Discord
            </Button>
            <Button variant="secondary" className="ml-2 bg-[#FF5003] ">
              <EnterIcon className="mr-2" />
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
