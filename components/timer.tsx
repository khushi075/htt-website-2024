"use client"
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }} className="mt-5">
      <h1>Hacking Time Left</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86000); // 24hr timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
 </div>
);
}