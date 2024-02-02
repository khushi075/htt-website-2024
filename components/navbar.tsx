import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="sticky border rounded-full mt-4 container top-3 flex h-[60px] justify-between items-center z-50 backdrop-blur-sm">
      <div className="text-xl font-medium ">HackTheTank 2.0 </div>
      <div className="sm:flex flex-grow justify-center gap-5 hidden ">
        {["Home", "About", "Sponsors", "Prizes", "Contact"].map((item) => {
          return (
            <a key={item} href={`#${item.toLocaleLowerCase()}`} className="cursor-pointer">
              {item}
            </a>
          );
        })}
      </div>
      <Button variant="outline" className="rounded-full hidden sm:flex">
        <DownloadIcon className="mr-2" />
        Brochure{" "}
      </Button>
    </div>
  );
}