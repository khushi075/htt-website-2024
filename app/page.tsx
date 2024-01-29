import Prize from "@/components/prize";
import PrizeSection from "@/components/prizeSection";
import ContactSection from "@/components/contactSection";
import Image from "next/image";
import TeamSection from "@/components/teamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Prize />
      <ContactSection />
      <TeamSection />
    </main>
  );
}
