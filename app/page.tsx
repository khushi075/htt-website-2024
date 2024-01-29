import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Sponsors from "@/components/sponsors";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container justify-between">
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
    </main>
  );
}
