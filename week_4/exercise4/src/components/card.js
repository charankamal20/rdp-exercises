// react 


export default function Card({ path, heading, subheading, time }) {

    return (
        <div className="w-72 h-64 bg-[#242424] text-white rounded-md flex-col">
            <img alt="card" src={path} className="h-40 w-full p-2 rounded-xl"></img>
            <h1 className="text-base pl-4 p-2">{heading}</h1>
            <div className="flex text-xs pl-4 text-gray-400">
                <h3>{subheading} &#x2022; {time}</h3>
            </div>
        </div>
    );
}