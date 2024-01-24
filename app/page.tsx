import Prize from "@/components/prize";
import PrizeSection from "@/components/prizeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Prize />
    </main>
  );
}
