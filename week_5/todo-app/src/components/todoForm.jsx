// todoForm.jsx
// react
import { useState } from "react";


export default function TodoForm({ formState, handleAddTask, setFormState }) {
    const [task, setTask] = useState({ Goal: '', ChapterName: '', completed: false });
    
    const handleTaskSubmittion = (event) => {
        if(task.Goal === '') {
          alert("Enter a Goal");
        }
        else {
          handleAddTask({...task, createdAt: Date.now(), notes: ''});
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
      <form id="todo-form" 
        className={`z-10 flex flex-col text-black bg-white transition-all absolute -top-16 shadow-2xl py-2 px-4 w-full rounded-[4px] overflow-hidden ${formState ? 'h-52' : 'h-0 -top-[68px]'} `}
        onSubmit={handleTaskSubmittion}
        >
        <label className="p-1">Your Goal.</label>
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
    );
  }
