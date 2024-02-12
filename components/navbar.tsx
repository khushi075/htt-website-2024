"use client";

import { useState } from "react";
import { DownloadIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="inline ">
    <div className="sticky border rounded-full mt-4 container w-11/12 mx-auto top-3 left-0 flex h-[60px] justify-between items-center z-50 backdrop-blur-sm">
      <div className="text-xl font-medium">HackTheTank 2.0</div>
      <div className="md:hidden">
        {/* Hamburger icon to toggle the mobile menu */}
        <button onClick={toggleMenu} className="text-xl">
          {isMenuOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
        </button>
      </div>
      <div className={`md:flex flex-grow justify-center gap-5 hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {["ABOUT", "SPONSORS", "PRIZES", "CONTACT"].map((item) => {
          return (
            <a key={item} href={`#${item.toLocaleLowerCase()}`} className="cursor-pointer">
              {item}
            </a>
          );
        })}
      </div>
      <Button variant="outline" className="rounded-full hidden md:flex">
        <DownloadIcon className="mr-2" />
        Brochure
      </Button>
    </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden container  flex:cols items-center justify-center fixed top-20 -left-1 ${isMenuOpen ? "h-screen" : "h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out z-50`}
      >
        {["ABOUT", "SPONSORS", "PRIZES", "CONTACT"].map((item) => (
          <a key={item} href={`#${item.toLocaleLowerCase()}`} className="py-3 mb-1 border rounded-full cursor-pointer flex justify-center items-center backdrop-blur-sm z-50 ">
            {item}
          </a>
        ))}
        <div className="flex justify-center items-center">
        <Button variant={"outline"} className="rounded-full text-md py-6 w-full backdrop-blur-sm">
          <DownloadIcon width={20} height={20} className="mr-3"/>
        BROCHURE
        </Button>
        </div>
      </div>
    </div>
  );
}