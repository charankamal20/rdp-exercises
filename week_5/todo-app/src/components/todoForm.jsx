// todoForm.jsx
// react
import { useState } from "react";


export default function TodoForm({ formState, handleAddTask, setFormState, currentBook }) {
    const [task, setTask] = useState({ Goal: '', ChapterName: '', completed: false});
    
    const handleTaskSubmittion = (event) => {
        if(task.Goal === '') {
          alert("Enter a Goal");
        }
        else {
          handleAddTask({...task, createdAt: Date.now(), notes: '', book: currentBook});
          setTask({Goal:'', ChapterName: '', completed: false});
        }
        setFormState(false);
        event.preventDefault();
    }

    const handleGoalChange = (event) => {
      setTask({ ...task, Goal: event.target.value });
    }
  
    const handleChapterChange = (event) => {
      setTask({ ...task, ChapterName: event.target.value });
    }
  
    return (
      <div className={`z-40 overflow-hidden transition-all absolute shadow-2xl w-full -top-16 ${formState ? 'h-52' : 'h-0 -top-[68px]'} `}>
        <form id="todo-form" 
          className={`flex flex-col text-black bg-white py-2 px-4 w-full rounded-[4px]`}
          onSubmit={handleTaskSubmittion}
          >
          <div className="flex justify-between items-center">
            <label className="p-1">Your Goal.</label>
            <button onClick={() => setFormState(false)}
              className="hover:drop-shadow-lg"
              >
              <svg
                className="h-5 mr-1 fill-darkGray transition-all hover:fill-black hover:rotate-90" 
                viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
            </button>
          </div>

          <input
            required
            className="block bg-lightGray rounded-[4px] w-full mt-2 mb-4 p-2"
            type="text"
            onChange={handleGoalChange}
            value={task.Goal}
          />
          <label>Chapter Name.</label>
          <input
            className="block bg-lightGray rounded-[4px] w-full mt-2 mb-2 p-2"
            type="text"
            onChange={handleChapterChange}
            value={task.ChapterName}
          />
        </form>
      </div>
    );
  }
