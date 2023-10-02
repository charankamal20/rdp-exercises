// react 

export default function TodoCard({item, markAsCompleted, deleteTask, addNotes}) {

    const handleAnnotationChange = (event) => {
        addNotes({...item, notes: event.target.value})
    }   

    return (
        <div className="w-full bg-lightGray p-6 rounded-[4px] transition-all hover:drop-shadow-lg flex-col">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-center items-center">
                    <input 
                        onClick={() => markAsCompleted(item)}
                        type="checkbox" 
                        className="appearance-none w-6 h-6 rounded-full border-2 border-red-500 bg-white shrink-0
                        transition-all checked:bg-bg-black checked:border-8"/>
                    <span className={`${item.completed ? 'line-through' : ''}`} >{item.Goal}</span>
                </div>
                <div className="flex gap-4 justify-center max-w-[100px] sm:max-w-[150px] md:max-w-xs lg:max-w-md hover: font-semibold items-center">
                    <span className="truncate ">{item.ChapterName}</span>
                    <button 
                        className="z-10 h-10 w-10 flex justify-center items-center rounded-full transition duration-300 transform hover:-translate-y-[2px] hover:shadow-md hover:bg-white/30"
                        onClick={() => deleteTask(item)}> 
                        <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex-col mt-6 text-sm font-semibold">
                {/* <span></span> */}
                <textarea 
                    placeholder="Your notes/annotations go here:"
                    value={item.notes}
                    className="border shadow-inner block w-full rounded-[4px] p-3 py-2" 
                    onChange={handleAnnotationChange}
                    />
            </div>
        </div>
    );
}