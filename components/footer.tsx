import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="h-[200px] flex flex-col items-center justify-center bg-secondary gap-4">
      <div className="flex gap-2 opacity-50">
        <InstagramLogoIcon className="size-5" />
        <TwitterLogoIcon className="size-5" />
        <LinkedInLogoIcon className="size-5" />
        <EnvelopeClosedIcon className="size-5" />
      </div>
      <div className="opacity-50">Copyright ©️ 2024 - HackTheTank</div>
    </div>
  );
}
