import React from "react";
import team from "./team.jpg";
import "./team.css";
import Image from "next/image";

function TeamSection() {
  return (
    <div>
      <div className="team_container">
        <div className="left-column_team">
          <div className="image-container">
            <Image src={team} alt="Team Image" width={700} height={500} />
          </div>
        </div>
        <div className="right-column_team">
          <div className="team-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              sit amet venenatis urna cursus eget nunc scelerisque. Mi tempus
              imperdiet nulla malesuada. Venenatis lectus magna fringilla urna
              porttitor rhoncus dolor. Sit amet consectetur adipiscing elit ut.
              Dui ut ornare lectus sit amet est placerat in. Diam in arcu cursus
              euismod quis viverra nibh cras pulvinar. Sed faucibus turpis in eu
              mi bibendum. Molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed.
            </p>
            <p>
              Pretium vulputate sapien nec sagittis aliquam malesuada bibendum.
              Sapien nec sagittis aliquam malesuada. Odio morbi quis commodo
              odio aenean sed adipiscing. Pretium viverra suspendisse potenti
              nullam ac tortor vitae. Blandit volutpat maecenas volutpat
              blandit. Risus ultricies tristique nulla aliquet enim tortor at.
              Tellus at urna condimentum mattis. Sed id semper risus in
              hendrerit. Cursus in hac habitasse platea dictumst quisque
              sagittis purus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
