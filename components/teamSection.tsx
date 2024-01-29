import React from "react";
import team from "./team.jpg";
import "./team.css";
import Image from "next/image";
import { Button } from "./ui/button";

function TeamSection() {
  return (
    <div>
      <div className="team-description h-dvh flex items-center gap-10">
        <div>
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-thin">From GDSC '24 !</div>
            <div className="opacity-50 text-xl">
              Pretium vulputate sapien nec sagittis aliquam malesuada bibendum.
              Sapien nec sagittis aliquam malesuada. Odio morbi quis commodo
              odio aenean sed adipiscing. Pretium viverra suspendisse potenti
              nullam ac tortor vitae. Blandit volutpat maecenas volutpat
              blandit. Risus ultricies tristique nulla aliquet enim tortor at.
              Tellus at urna condimentum mattis. Sed id semper risus in
              hendrerit. Cursus in hac habitasse platea dictumst quisque
              sagittis purus.
            </div>
            <Button className="w-fit mt-8 rounded-sm">Reach out to us !</Button>
          </div>
        </div>
        <img src={team.src} className="rounded size-1/2" alt="Team Image" />
      </div>
    </div>
  );
}

export default TeamSection;
