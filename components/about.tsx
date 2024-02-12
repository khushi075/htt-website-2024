import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";

const mono = GeistMono.className;
export default function About() {
  return (
    <section className="text-gray-400 body-font" id="about">
      <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About <div className="inline md:hidden">&nbsp;</div>
            <br className="hidden lg:inline-block " />
            HackTheTank 2.0
          </h1>
          <p className="mb-8 leading-relaxed">
            "Hack the Tank" is a groundbreaking hackathon where the innovation
            of Shark Tank meets the brilliance of student developers. In this
            30-hour event, aspiring talents dive into unique problem statements
            presented by Shark Tank entrepreneurs, spanning diverse domains such
            as web development, app development, and data analytics. Get ready
            for a dynamic fusion of creativity and technical prowess as students
            collaborate, ideate, and deliver cutting-edge solutions that
            redefine the intersection of technology and entrepreneurship. Join
            us for an unparalleled experience where the next wave of innovation
            takes shape in just 30 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
