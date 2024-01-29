import React from "react";
import PrizeSection from "./prizeImage";
import { Button } from "./ui/button";

export default function Prize() {
  return (
    <div className="flex flex-col items-center h-screen justify-around">
      <PrizeSection />

      <div className="text-6xl ">Prizes worth 25000 !</div>
      <div className="flex gap-2 w-full">
        <div className=" h-[350px] flex flex-col justify-between p-4 w-full rounded">
          <div className="flex flex-col gap-4">
            <div className="text-6xl font-mono">01.</div>
            <div className="text-4xl font-mono">track name</div>
            <div className="opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vel quam reiciendis nam perferendis incidunt, nulla
              expedita.
            </div>
          </div>
          <div className="w-full">
            <hr className="bg-secondary" />
            <Button className="w-full bg-blue-500">Explore more</Button>
          </div>
        </div>
        <div className=" h-[350px] flex flex-col justify-between p-4 w-full rounded">
          <div className="flex flex-col gap-4">
            <div className="text-6xl font-mono">01.</div>
            <div className="text-4xl font-mono">track name</div>
            <div className="opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vel quam reiciendis nam perferendis incidunt, nulla
              expedita.
            </div>
          </div>
          <div className="w-full">
            <hr className="bg-secondary" />
            <Button className="w-full bg-blue-500">Explore more</Button>
          </div>
        </div>{" "}
        <div className=" h-[350px] flex flex-col justify-between p-4 w-full rounded">
          <div className="flex flex-col gap-4">
            <div className="text-6xl font-mono">01.</div>
            <div className="text-4xl font-mono">track name</div>
            <div className="opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vel quam reiciendis nam perferendis incidunt, nulla
              expedita.
            </div>
          </div>
          <div className="w-full">
            <hr className="bg-secondary bg-blue-500" />
            <Button className="w-full bg-blue-500">Explore more</Button>
          </div>
        </div>{" "}
        <div className=" h-[350px] flex flex-col justify-between p-4 w-full rounded">
          <div className="flex flex-col gap-4">
            <div className="text-6xl font-mono">01.</div>
            <div className="text-4xl font-mono">track name</div>
            <div className="opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vel quam reiciendis nam perferendis incidunt, nulla
              expedita.
            </div>
          </div>
          <div className="w-full">
            <hr className="bg-secondary " />
            <Button className="w-full bg-blue-500">Explore more</Button>
          </div>
        </div>{" "}
        <div className=" h-[350px] flex flex-col justify-between p-4 w-full rounded">
          <div className="flex flex-col gap-4">
            <div className="text-6xl font-mono">01.</div>
            <div className="text-4xl font-mono">track name</div>
            <div className="opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vel quam reiciendis nam perferendis incidunt, nulla
              expedita.
            </div>
          </div>
          <div className="w-full">
            <hr className="bg-secondary" />
            <Button className="w-full bg-blue-500">Explore more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
