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
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="md:w-11/12 items-center mx-auto">
      <Navbar />
      <div className="flex min-h-screen flex-col container justify-between items-center">
        <Hero />
        <About />
        <CarouselDemo />
        <Sponsors />
        <Prize />
        <AccordionDemo />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
