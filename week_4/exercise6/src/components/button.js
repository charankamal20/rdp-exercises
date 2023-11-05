// react 


export default function Button({buttonId ,buttonText, focused, onClick})    {

    const handleClick = () => {
        onClick(buttonId);
    };

    return (
        <button   
            style={{
                boxSizing: 'border-box',
                backgroundColor: focused ? 'white' : '',
                outlineStyle: focused ? 'solid' : 'none',
                color: focused ? '#2F53BA' : 'white',
            }}   
            onClick={handleClick}      
            className="text-white outline hover:bg-gray-300/30 font-bold m-1 p-3 pl-14 pr-14 rounded-lg outline-[3px] outline-offset-[2px] outline-white/60">
                {buttonText}</button>
    );
}