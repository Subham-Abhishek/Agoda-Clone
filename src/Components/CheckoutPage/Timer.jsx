import React, { useEffect, useState } from "react";
import moment from "moment";

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2020-09-26 18:59:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  return (
    <div className="timer-container">
      {showSemicolon ? <div className="semicolon">:</div> : null}
      <div className="timer">{hours}:</div>
      {showSemicolon ? <div className="semicolon">:</div> : null}
      <div className="timer">{minutes}:</div>
      {showSemicolon ? <div className="semicolon">:</div> : null}
      <div className="timer">{seconds}</div>
    </div>
  );
}
