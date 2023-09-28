// react 

export default function TodoCard({goalTitle, chapterName, markAsCompleted, deleteTask})  {


    return (
        <div className="bg-lightGray p-4 rounded-md flex-col max-w-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <input type="checkbox" className="appearance-none w-4 h-4 rounded-full border-2 border-red-500 bg-white shrink-0
                        checked:bg-bg-black checked:border-4"/>
                    <span>{goalTitle}</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <span>{chapterName}</span>
                    <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                    </svg>
                </div>
            </div>
            <div className="flex-col mt-3">
                <span>Your notes/annotations go here:</span>
                <textarea className="border block w-full rounded-md mt-2 p-1" />
            </div>
        </div>
    );
}