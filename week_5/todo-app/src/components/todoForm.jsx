// todoForm.jsx
// react
import { useState } from "react";


export default function TodoForm({ formState, handleAddTask }) {
    const [task, setTask] = useState({ Goal: '', ChapterName: '', completed: false });
    
    const handleTaskSubmittion = () => {
        handleAddTask({...task, createdAt: Date.now()});
        setTask({Goal:'', ChapterName: '', completed: false});
        console.log(task);
    }

    const handleGoalChange = (event) => {
      setTask({ ...task, Goal: event.target.value });
    }
  
    const handleChapterChange = (event) => {
      setTask({ ...task, ChapterName: event.target.value });
    }
  
    return (
      <form id="todo-form" 
        className={`flex text-black bg-white absolute -top-12 py-2 px-4 w-full rounded-md ${formState ? 'flex-col' : 'hidden'} `}
        onSubmit={handleTaskSubmittion}
        >
        <label>Your Goal.</label>
        <input
          className="block bg-lightGray rounded-md w-full mt-2 mb-4 p-2"
          type="text"
          onChange={handleGoalChange}
          value={task.Goal}
        />
        <label>Chapter Name.</label>
        <input
          className="block bg-lightGray rounded-md w-full mt-2 mb-2 p-2"
          type="text"
          onChange={handleChapterChange}
          value={task.ChapterName}
        />
      </form>
    );
  }
  