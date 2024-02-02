import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="text-5xl text-center pb-8">
          {" "}
          Frequently Asked Questions (FAQs){" "}
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who all can participate?</AccordionTrigger>
            <AccordionContent>
              Everyone with a passion for innovation and a drive to create is
              invited to participate. Whether you&apos;re a seasoned developer, a
              creative designer, or a problem-solving enthusiast, join us for an
              exciting journey of collaboration and discovery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What should be the team size?</AccordionTrigger>
            <AccordionContent>
              Each team must have 3 participants. Additionally, participants do
              not necessarily need to be from the same university, fostering
              diverse collaboration and expertise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is there a registration fee involved?
            </AccordionTrigger>
            <AccordionContent>
              No, the hackathon is completely free of cost! We believe in
              providing an inclusive and accessible platform for all enthusiasts
              to participate in this exciting event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is the mode of conduct of Hack The Tank 2.0?
            </AccordionTrigger>
            <AccordionContent>
              Hack the Tank 2.0 will be conducted offline, offering a unique
              setting for real-time collaboration, networking opportunities,
              immediate feedback, a focused environment, and hands-on learning
              experiences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Why should I attend Hack The Tank 2.0 ?{" "}
            </AccordionTrigger>

            <AccordionContent>
              Hack The Tank 2.0, is India&rsquo;s only Shark Tank-themed hackathon!
              Dive into a unique experience where real-world problems are
              presented by pitchers from Shark Tank. Don&rsquo;t miss the chance to
              tackle these challenges, showcase your skills, and make a splash
              in the world of innovation and entrepreneurship!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What is I haven&apos;t been to hackathons before
            </AccordionTrigger>
            <AccordionContent>
              Welcome! No prior hackathon experience is needed. Hack The Tank
              2.0 is open to all levels of expertise. Join us for a supportive
              and collaborative environment, where you can learn, create, and
              make valuable connections. It&apos;s a fantastic opportunity to
              kick-start your hackathon journey!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
