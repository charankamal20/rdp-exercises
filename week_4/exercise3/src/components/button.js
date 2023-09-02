// react 

function Button({displayText, handleClick})   {
    return (
        <button className="w-fit text-sm border p-1 pl-2 pr-2 rounded-md font-bold transition duration-300 focus:shadow-xl focus:-translate-y-1 hover:shadow-xl hover:-translate-y-1 border-black" 
            onClick={handleClick}>
                {displayText}
        </button>
    );
}

export default Button;  