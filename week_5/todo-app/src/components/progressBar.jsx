// react
import { useState, useEffect } from "react";

export default function ProgressBar({ items }) {
  const [totalItems, setTotalItems] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].completed === true) {
        counter++;
      }
    }
    setTotalItems(items.length);
    setCompleted(counter);
  }, [items]); 

  const progress = (completed / totalItems) * 100;

  return (
    <div className="w-full gap-2 flex flex-col rounded-md justify-between items-center">
      <h1 className="font-bold w-full text-xl px-4 py-2">Progress Bar</h1>
      <div className="flex flex-col gap-2 justify-between items-center w-full ">
        <div className="bg-lightGray w-11/12 h-4 rounded-full">
          <div
            className="bg-green-500 h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
            ></div>
        </div>
        <span className="text-sm text-darkGray mb-3">{completed} of {totalItems} completed</span>
      </div>
    </div>
  );
}
