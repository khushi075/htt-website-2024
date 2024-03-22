import React from 'react';
import Timebox from './ui/timebox';

const Timeline = () => {
  return (
    <div className="flex flex-col items-center w-11/12 mx-auto">
      <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-[#0045CF] to-[#FF5003] inline-block text-transparent bg-clip-text mb-6">Event Timeline</h2>
      <div className="flex flex-col lg:flex-row justify-center max-md:items-center lg:justify-evenly gap-8">
        <div className="flex flex-col justify-start items-center w-1/2">
          <h2 className="text-2xl font-semibold mb-5">23rd March</h2>
          <div>
            <Timebox
              time="8:30 - 10:30 AM"
              title="📝 Registration"
              description="Sign up and get your badges!"
            />
            <Timebox
              time="10:00 - 10:30 AM"
              title="🎉 Opening Ceremony"
              description="Kickstart the event with a grand opening!"
            />
            <Timebox
              time="10:30 - 11:30 AM"
              title="💡 Problem Statement Overview"
              description="Learn about the challenges to be tackled."
            />
            <Timebox
              time="11:30 - 11:45 AM"
              title="📋 Problem Statement Assignment"
              description="Get assigned to a problem statement group."
            />
            <Timebox
              time="12:00 PM"
              title="💻 Hacking Begins"
              description="Start coding your solutions!"
            />
            <Timebox
              time="14:00 - 15:00 PM"
              title="🍲 Lunch Break"
              description="Recharge with some delicious food!"
            />
            <Timebox
              time="16:00 PM"
              title="🤝 Mentoring Round 1"
              description="Get expert advice on your projects."
            />
            <Timebox
              time="17:30 - 18:00 PM"
              title="🎙️ Talk"
              description="Listen to insightful talks from industry leaders."
            />
            <Timebox
              time="19:30 - 21:00 PM"
              title="🍽️ Dinner Break"
              description="Enjoy the dinner with fellow participants."
            />
            <Timebox
              time="21:00 PM"
              title="🔄 Mentoring Round 2"
              description="More opportunities for project guidance."
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-center w-1/2">
          <h2 className="text-2xl font-semibold mb-5">24th March</h2>
          <div>
            <Timebox
              time="8:00 - 9:00 AM"
              title="🥞 Breakfast Break"
              description="Start your day with a delicious breakfast!"
            />
            <Timebox
              time="11:00 AM - 1:00 PM"
              title="🤝 Mentoring Round 3"
              description="Final chance for project guidance."
            />
            <Timebox
              time="12:00 PM"
              title="⌛ Hacking Period Ends"
              description="Complete your projects and prepare for presentations."
            />
            <Timebox
              time="12:00 - 2:00 PM"
              title="🍽️ Lunch Break"
              description="Recharge for the afternoon sessions with a hearty lunch!"
            />
            <Timebox
              time="2:00 PM - 3:00 PM"
              title="💬 Panel Discussion"
              description="Engage in insightful discussions with industry experts."
            />
            <Timebox
              time="4:00 PM - 5:00 PM"
              title="📊 Presentations"
              description="Showcase your projects to the audience."
            />
            <Timebox
              time="5:30 PM - 6:30 PM"
              title="🎉 Closing Ceremony"
              description="Celebrate the end of the event and acknowledge participants' achievements."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;