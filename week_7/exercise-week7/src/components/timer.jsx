import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState, useRef } from "react";
import Button from '@mui/material/Button';
import { withLogging } from "./withLogging";

const Timer = () => {
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      let totalSeconds = value.$m * 60 + value.$s;

      intervalRef.current = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
        } else {
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          setTime({ minutes, seconds });
          totalSeconds -= 1;
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setTime({ minutes: 0, seconds: 0 });
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-3">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="font-extrabold text-8xl drop-shadow-lg flex items-center">
            <span>{String(time.minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(time.seconds).padStart(2, '0')}</span>
          </div>
          <TimePicker
            views={['minutes', 'seconds']}
            format="mm:ss"
            label="Pick Time"
            defaultValue={dayjs('2022-04-17T15:30')}
            value={value}
            onChange={(newValue) => {
              if (!isRunning) {
                setValue(newValue);
                setTime({ minutes: newValue.$m, seconds: newValue.$s });
              }
            }}
          />
          <Button onClick={startTimer} variant="outlined">
            {isRunning ? "Reset" : "Start"}
          </Button>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default withLogging(Timer);