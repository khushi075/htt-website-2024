import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";

const mono = GeistMono.className;
export default function About() {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-2">
        <div className={cn("text-4xl font-thin")}>About</div>
        <div className="text-xl opacity-50 w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          suscipit hic eius dignissimos labore officiis, iusto facilis? Expedita
          nihil officiis, quod eveniet culpa iusto eius corrupti, id, magni illo
          nulla. Tempora iusto voluptatem quae neque possimus asperiores sit,
          hic explicabo laborum excepturi, illo odio cum in veritatis est
          fugiat. Dolores?
        </div>
      </div>
    </div>
  );
}
