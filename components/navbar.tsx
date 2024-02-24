"use client";

import { useEffect, useState } from "react";
import { DownloadIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import logo from "@/assets/images/logo-htt.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="inline ">
    <div className="sticky border rounded-full mt-4 container w-11/12 mx-auto top-3 left-0 flex h-[60px] justify-between items-center z-50 backdrop-blur-sm">
      <div className="text-lg font-medium flex items-center justify-center gap-x-2">
        <img
            className="object-cover object-center rounded "
            alt="hero"
            height={60}
            width={110}
            src={logo.src}
          />
        <div className="hidden">HackTheTank 2.0</div>

      </div>
      <div className="md:hidden">
          {/* Hamburger icon to toggle the mobile menu */}
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? (
              <Cross1Icon width={24} height={24} />
            ) : (
              <HamburgerMenuIcon width={24} height={24} />
            )}
          </button>
        </div>
      <div className={`md:flex flex-grow justify-center gap-5 hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {["ABOUT", "SPONSORS", "PRIZES", "CONTACT"].map((item) => {
          return (
            <Link key={item} href={`#${item.toLocaleLowerCase()}`} className="cursor-pointer">
              {item}
            </Link>
          );
        })}
      </div>
      <Link href="https://drive.google.com/uc?export=download&id=14mLF3eVDI5EroRx7WLmYhrqowmur7gWa" download="HTT2-Brochure.pdf" className="hidden md:flex">
        <Button variant="outline" className="rounded-full hidden md:flex">
          <DownloadIcon className="mr-2" />
          Brochure
        </Button>
      </Link>
    </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden container  flex:cols items-center justify-center fixed top-20 -left-1 ${isMenuOpen ? "h-screen" : "h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out z-50`}
      >
        {["ABOUT", "SPONSORS", "PRIZES", "CONTACT"].map((item) => (
          <Link key={item} href={`#${item.toLocaleLowerCase()}`} className="py-3 mb-1 border rounded-full cursor-pointer flex justify-center items-center backdrop-blur-sm z-50 ">
            {item}
          </Link>
        ))}
        <div className="flex justify-center items-center">
        <Link href="https://drive.google.com/uc?export=download&id=14mLF3eVDI5EroRx7WLmYhrqowmur7gWa" download="HTT2-Brochure.pdf" className="w-full backdrop-blur-sm text-center border rounded-full">
          <Button
            variant={"outline"}
            className="rounded-full text-md py-6 w-full"
          >
            <DownloadIcon width={20} height={20} className="mr-3" />
            BROCHURE
          </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}