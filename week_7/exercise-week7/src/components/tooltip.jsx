import React, { useEffect, useRef, useState } from "react";
import { withLogging } from "./withLogging";

const Tooltip = () => {

    const tooltipRef = useRef();
    const elementRef = useRef();
    const [tooltipOpen, setTooltipOpen] = useState(false);
    
    useEffect(() => {
        const tooltip = tooltipRef.current;
    
            tooltip.classList.toggle('hidden');
            tooltip.classList.toggle('block');
    });

    return (
    <div className="flex flex-col justify-center items-center">
        <button
            onMouseEnter={() => {
                setTooltipOpen(true);
            }}  
            onMouseLeave={() => {
                setTooltipOpen(false);
            }}
            className="card font-normal relative" ref={elementRef}>
            <div className="flex transition-all hover:font-extrabold justify-center rounded-lg items-center w-32 h-16 bg-white border border-blue-600">
                Hover
            </div>
            <div ref={tooltipRef} className="bg-black w-full -top-14 absolute hidden text-white font-bold px-4 py-2 rounded-md">Tooltip</div>
        </button>
    </div>
    );
}

export default withLogging(Tooltip);