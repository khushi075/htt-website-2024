import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Sponsors from "@/components/sponsors";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Prize from "@/components/prize";
import PrizeSection from "@/components/prizeImage";
import ContactSection from "@/components/contactSection";
import Image from "next/image";
import TeamSection from "@/components/teamSection";
import { AccordionDemo } from "@/components/faq";
import { CarouselDemo } from "@/components/memories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container justify-between">
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Prize />
      <ContactSection />
      <TeamSection />
      <AccordionDemo />
      <CarouselDemo />
    </main>
  );
}
