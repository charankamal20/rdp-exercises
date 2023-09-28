// List.jsx
import { useState } from 'react';
import TodoCard from './todoCard';
import TodoForm from './todoForm';

export default function TodoList() {
    const [formState, setFormState] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [formSubmit, setFormSubmit] = useState(false);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
        handleFormSubmit();
    }

    const handleFormSubmit = () => {
        setFormState(false);
        setFormSubmit(true);
    }

    const handleFormOpen = () => {
        setFormState(!formState);
    };

    const markAsCompleted = (task) => {}

    const deleteTask = (task) => {}

    return (
        <div className='bg-darkGray relative flex flex-col w-3/5 max-w-xl mx-4 my-2 rounded-md'>
        <div id='header-group' className='w-full grid grid-cols-5 p-3 gap-2'>
            <button className='rounded-md col-span-4 relative bg-white text-left text-darkGray py-2 px-4'
            onClick={handleFormOpen}
            >
            Start Reading...
            </button>
            <button
                className='font-bold col-span-1 bg-yellow-500 py-2 rounded-md'
                type='submit'
                form="todo-form"
            >Add</button>

            <div className="relative col-span-4">
            <TodoForm
                formState={formState}
                handleAddTask={handleAddTask}
                submitFlag={formSubmit}
            />
            </div>
            {/* <div>
            {tasks.map(task =>
                <TodoCard
                key={task.createdAt}
                item={task}
                markAsCompleted={markAsCompleted}
                deleteTask={deleteTask}
                />)}
            </div> */}
        </div>
        </div>
    );
}
