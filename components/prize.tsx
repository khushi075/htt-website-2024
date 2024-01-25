import React from "react";
import PrizeSection from "./prizeSection";

export default function Prize() {
  return (
    <div className="flex gap-0 container">
      <PrizeSection />
      <div className="ml-8 mb-10">
        <p>
          Elevate your hackathon experience with our exclusive Shark Tank event!
          Five prominent industry leaders, each a seasoned entrepreneur and
          investor, will be joining us to pitch their unique problem statements.
          Participants will have the extraordinary opportunity to showcase their
          innovative solutions directly to these Shark Tank pitchers.
        </p>
        <p>
          Each Shark Tank judge will carefully evaluate the presented solutions
          and select one outstanding team whose project aligns most closely with
          their problem statement. The winning teams will not only gain
          invaluable insights from industry experts but will also be awarded
          exclusive prizes directly chosen by the Shark Tank pitchers
          themselves. Don't miss the chance to impress these titans of industry
          and take home a prize that could propel your project to new heights!
        </p>
      </div>
    </div>
  );
}
