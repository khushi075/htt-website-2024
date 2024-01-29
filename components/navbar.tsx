import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-[60px] justify-between items-center">
      <div className="text-xl font-medium">HackTheTank 2.0 </div>
      <div className="flex flex-grow justify-center gap-5">
        {["ABOUT", "SPONSORS", "PRICING", "CONTACT"].map((item) => {
          return (
            <div key={item} className="cursor-pointer">
              {item}
            </div>
          );
        })}
      </div>
      <Button variant="outline" className="rounded-full">
        <DownloadIcon className="mr-2" />
        Brochure{" "}
      </Button>
    </div>
  );
}
