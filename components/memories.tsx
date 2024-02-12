import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import htt6 from "@/assets/images/htt6.jpg";
import htt7 from "@/assets/images/htt7.jpg";
import htt8 from "@/assets/images/htt8.jpg";
import htt9 from "@/assets/images/htt9.jpg";
import htt10 from "@/assets/images/htt10.jpg";

export function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="w-full  aspect-video">
          <div className="p-1">
            <img src={htt6.src} className="w-full rounded" />
          </div>
        </CarouselItem>
        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img src={htt7.src} className="w-full rounded" />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img src={htt8.src} className="w-full rounded" />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img
              src={htt9.src}
              className="w-full object-cover aspect-video rounded"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img
              src={htt10.src}
              className="w-full object-cover aspect-video rounded"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
