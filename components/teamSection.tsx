import React from "react";
import team from "./team.jpg";
import "./team.css";
import Image from "next/image";
import { Button } from "./ui/button";

import htt11 from "@/assets/images/htt11.jpg";

function TeamSection() {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <img
          className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={htt11.src}
        />

        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            From GDSC &apos;24
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to the heart of innovation, where passion meets expertise!
            Our dynamic team is fueled by a shared commitment to pushing
            boundaries, solving challenges, and creating solutions that redefine
            the future. As we embark on this exciting journey together, we
            invite you to join us in transforming ideas into reality. Let's
            code, collaborate, and celebrate innovation at 'Hack the Tank.'
            Together, we'll make waves in the world of technology and
            entrepreneurship.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
