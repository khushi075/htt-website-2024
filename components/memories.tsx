import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import htt1 from "@/assets/images/htt1.jpeg";
import htt2 from "@/assets/images/htt2.jpeg";
import htt3 from "@/assets/images/htt3.jpeg";
import htt4 from "@/assets/images/htt4.jpg";
import htt5 from "@/assets/images/htt5.jpeg";

export function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="w-full  aspect-video">
          <div className="p-1">
            <img src={htt1.src} className="w-full rounded" />
          </div>
        </CarouselItem>
        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img src={htt2.src} className="w-full rounded" />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img src={htt3.src} className="w-full rounded" />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img
              src={htt4.src}
              className="w-full object-cover aspect-video rounded"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="w-full h-full">
          <div className="p-1">
            <img
              src={htt5.src}
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
