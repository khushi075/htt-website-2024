import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import htt1 from "./images/htt1.jpeg";
import htt2 from "./images/htt2.jpeg";
import htt3 from "./images/htt3.jpeg";
import htt4 from "./images/htt4.jpeg";
import htt5 from "./images/htt5.jpeg";

const imageSources = [htt1, htt2, htt3, htt4, htt5];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={imageSources[index].src}
                    alt={`Image ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
