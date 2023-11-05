import React, { useState, useEffect } from 'react';
// react

const PomodoroTimer = () => {
  const initialTime = 25 * 60; 
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  return (
    <div className="flex flex-col gap-1">
      <h1 className="drop-shadow-lg text-3xl font-bold mx-auto mt-4 text-black">Pomodoro Timer</h1>
      <div className='grid grid-col-5 '>
        <div className="col-start-1 h-full gap-3 flex flex-col justify-center items-end">
          <button
            className={`drop-shadow-lg ${ 
              isActive ? 'hidden' : ''
            }`}
            onClick={toggleTimer}
          >
            <svg
              className='h-8 transition-all stroke-black duration-300 hover:stroke-darkGray hover:-translate-y-1' 
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
          </button>
          <button
            className={` ${
              isActive ? '' : 'hidden'
            }`}
            onClick={toggleTimer}
          >
            <svg
              className='h-8 transition-all stroke-black duration-300 hover:stroke-darkGray hover:-translate-y-1' 
              viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width=""></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 6.42004C10 4.76319 8.65685 3.42004 7 3.42004C5.34315 3.42004 4 4.76319 4 6.42004V18.42C4 20.0769 5.34315 21.42 7 21.42C8.65685 21.42 10 20.0769 10 18.42V6.42004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 6.42004C20 4.76319 18.6569 3.42004 17 3.42004C15.3431 3.42004 14 4.76319 14 6.42004V18.42C14 20.0769 15.3431 21.42 17 21.42C18.6569 21.42 20 20.0769 20 18.42V6.42004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
          <button
            className=""
            onClick={resetTimer}
          >
            <svg 
              className='transition-all fill-black h-7 hover:fill-darkGray hover:-translate-y-1'
              viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0" fill-rule="evenodd"></path> </g></svg>
          </button>
        </div>
        <div className="col-start-2 col-span-4 text-8xl font-bold drop-shadow-lg text-center my-4">{formatTime(time)}</div>
      </div>
      <div className='mx-auto w-11/12 h-px bg-black rounded'></div>
    </div>
  );
};

export default PomodoroTimer;
