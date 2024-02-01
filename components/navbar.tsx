import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="sticky border  rounded-full mt-4 container top-3 flex h-[60px] justify-between items-center z-50 backdrop-blur-sm">
      <div className="text-xl font-medium ">HackTheTank 2.0 </div>
      <div className="flex flex-grow justify-center gap-5">
        {["ABOUT", "SPONSORS", "PRIZES", "CONTACT"].map((item) => {
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
