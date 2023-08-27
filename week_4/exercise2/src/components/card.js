//react 


export default function Card({numOfSides, bgColor, internalColor})  {
    let divStyle = {};
    
    switch (numOfSides) {
        case "0": {
            divStyle = {
                borderRadius: "50%",
                backgroundColor: internalColor,
            };
            break;
        }
        case "3": {
            divStyle = {
                borderLeft: "160px solid transparent",
                borderRight: "160px solid transparent",
                borderBottom: `320px solid ${internalColor}`,
            };
            break;
        }
        default: {
            divStyle = {
                width: "240px",
                height: "240px",
                backgroundColor: internalColor,
                transform: "rotate(45deg)",
            };
            break;
        }
    }

    return (
        <div className="w-96 h-96 flex justify-center items-center rounded-[20%]" style={{backgroundColor: bgColor}}>
            <div className="w-80 h-80" style={divStyle}>

            </div>
        </div>
    );
}
