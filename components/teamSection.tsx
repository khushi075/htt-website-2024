import React from "react";
import team from "./team.jpg";
import "./team.css";
import Image from "next/image";
import { Button } from "./ui/button";

function TeamSection() {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            From GDSC &apos;24
          </h1>
          <p className="mb-8 leading-relaxed">
            Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
            live-edge tumeric scenester copper mug flexitarian. Prism vice offal
            plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
