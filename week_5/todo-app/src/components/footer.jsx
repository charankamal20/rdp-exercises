//react 
import { useState } from "react";

export default function Footer()    {

    const [hover, setHover] = useState(false);

    const setStateTrue = () => {
        setHover(true);
    }

    const setStateFalse = () => {
        setHover(false);
    }

    return (
        <div className="flex items-center justify-between w-full">
            <h3>&#169; Created by <a target="_blank" href='https://github.com/charankamal20' 
                    rel="noreferrer"
                    onMouseEnter={setStateTrue}
                    onMouseLeave={setStateFalse}
                    className="font-bold">classikh
                    <div className={`h-px bg-black rounded shadow-md transition-all overflow-hidden ${hover ? 'w-full' : 'w-0'}`}>

                    </div>
                    </a></h3>
        </div>
    );
}