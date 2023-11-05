// react 


export default function Button({ displayText, bgColor, textCol, handleClick })    {

    return (
        <button className="p-2 rounded-full pr-8 pl-8 duration-300 focus:-translate-y-0.5 hover:-translate-y-0.5" style={{backgroundColor: bgColor, color: textCol}} onClick={handleClick}>{displayText}</button>
    );

}