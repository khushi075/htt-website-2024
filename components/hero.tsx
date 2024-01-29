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

export default function Hero() {
  return (
    <div className="h-[calc(100dvh-60px)] flex items-center justify-center">
      <div>
        <div className="flex items-center gap-4 pb-2">
          <div className="opacity-30 text-2xl">12/1/2024</div>
          <div className="flex-grow border h-0"></div>
        </div>
        <h1 className="text-6xl font-bold">HackTheTank 2.0</h1>
        <p className="text-xl">A 24 hour shark tank themed hackathon.</p>
        <div className="flex mt-5 items-center justify-between">
          <div>
            <Button variant="outline" className="bg-blue-500">
              <DiscordLogoIcon className="mr-2" />
              Discord
            </Button>
            <Button variant="secondary" className="ml-2">
              <EnterIcon className="mr-2" />
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
