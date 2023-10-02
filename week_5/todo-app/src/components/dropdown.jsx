//react 
import { useState } from "react";

export default function Dropdown({items, openState, setCurrBook, setState, newBookAdd})      {

    const [bookName, setBookName] = useState('');

    const handleBookEntry = (event) => {
        const book = event.target.value;
        setBookName(book);
    }
    
    const handleClick = (event) => {
        const book = event.target.value;
        setCurrBook(book);
    }

    return (
        <div onMouseLeave={setState} className={`overflow-hidden transition-all ${openState ? "h-80" : "h-0"}`}>
            <div className={`bg-white text-xl w-80 max-h-80 rounded-md shadow-xl border flex flex-col gap-1 p-1`}>
                <div className="overflow-y-scroll">
                    {items.map(t => 
                        <button 
                            onClick={handleClick}
                            key={t.createdAt}
                            value={t.title}
                            className="w-full text-darkGray rounded-md flex justify-start items-center transition-all truncate hover:bg-lightGray hover:text-black py-4 px-3"
                            >
                            {t.title}
                        </button>
                    )}
                </div>
                <div className="h-px border border-black/30 w-full"></div>
                <button 
                    className=" w-full rounded-md flex justify-between items-center truncate transition-all hover:bg-lightGray py-3 px-2">
                    <input 
                        onChange={handleBookEntry}
                        value={bookName}
                        className="bg-transparent w-full appearance-none"
                        placeholder="Add new book"
                    />
                    <svg
                        onClick={() => {
                            if(bookName.length !== 0)   {
                                const book = {title: bookName};
                                newBookAdd(book);
                            }
                            
                            setBookName('');
                        }} 
                        className={`h-6 relative top-px fill-darkGray transition-all duration-300 hover:fill-black hover:rotate-90 overflow-hidden`}
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill='none' stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                    
                </button>
            </div>
        </div>
    );
}