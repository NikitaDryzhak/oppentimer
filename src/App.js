import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const oppenheimerDate = new Date("2023-07-30T12:00:00");

  const useCountdown = (oppenheimerDate) => {
    const countDownDate = new Date(oppenheimerDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
  };

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const addLeadingZero = (value) => String(value).padStart(2, "0");

  useCountdown(oppenheimerDate);
  const daysLeft = addLeadingZero(useCountdown(oppenheimerDate)[0]);
  const hoursLeft = addLeadingZero(useCountdown(oppenheimerDate)[1]);
  const minutesLeft = addLeadingZero(useCountdown(oppenheimerDate)[2]);
  const secondsLeft = addLeadingZero(useCountdown(oppenheimerDate)[3]);

  return (
    <div className="timer">
      <p className="timerCount top">
        {daysLeft}:{hoursLeft}:{minutesLeft}:{secondsLeft}
      </p>
    </div>
  );
}

export default App;
