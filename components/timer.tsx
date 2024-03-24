"use client";
import { useCallback, useEffect, useState } from "react";

const Timer3 = () => {
  const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    if (timeDifference <= 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
      const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000).toString().padStart(2, '0');

      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date("March 24, 2024 12:00:00").getTime();

    const intervalId = setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="bg-[#0A0A0A] h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          Hacking Period Ends In
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {Number(countDownTime?.hours)}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
              {Number(countDownTime?.hours) === 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {Number(countDownTime?.minutes)}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {Number(countDownTime?.minutes) === 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
                {Number(countDownTime?.seconds)}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
              {Number(countDownTime?.seconds) === 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer3;