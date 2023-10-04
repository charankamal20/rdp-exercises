// List.jsx
import { useState, useEffect } from 'react';
import TodoCard from './todoCard';
import TodoForm from './todoForm';

export default function TodoList({tasks, setTasks, setNotes, currentBook}) {

    const [formState, setFormState] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);
    const [listEmpty, setListEmpty] = useState(true);

    useEffect(() => {
        const isEmpty = tasks.every(task => task.book !== currentBook);
        setListEmpty(isEmpty);
    }, [tasks, currentBook]);

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

    const markAsCompleted = (task) => {
        const updatedArray = tasks.map(current => {
            const updatedTask = {...current};
            if(current.createdAt === task.createdAt) {
                updatedTask.completed = !task.completed;
            }
            return updatedTask;
        })
        setTasks(updatedArray);
    }

    const deleteTask = (task) => {
        const updatedArray = tasks.filter(t => t.createdAt !== task.createdAt);
        setTasks(updatedArray);
        console.log('click');
        console.log(task);
    }

    const handleNotesChange = (task) => {
        const updatedArray = tasks.map(current => {
            const updatedTask = {...current};
            if(current.createdAt === task.createdAt) {
                updatedTask.notes = task.notes;
            }
            return updatedTask;
        })
        setTasks(updatedArray);
        const updatedNotesArray = tasks.filter(t => t.notes !== "");
        setNotes(updatedNotesArray);
    }

    return (
        <div className='bg-gradient-to-b from-darkGray to-black/60 shadow-lg relative flex flex-col w-full rounded-[4px]'>
            <div id='header-group' className='w-full grid grid-cols-5 p-8 gap-4'>
                <button className='rounded-[4px] col-span-4 relative bg-white text-left text-darkGray py-3 px-6 transition-shadow hover:shadow-xl'
                    onClick={handleFormOpen}
                >
                Start Reading...
                </button>
                <button
                    className='font-bold col-span-1 bg-yellow-500 rounded-[4px] transition-all duration-300 hover:shadow-xl hover:m-px hover:text-white'
                    type='submit'
                    form="todo-form"
                >Add</button>

                <div className="relative col-span-4">
                    <TodoForm
                        currentBook={currentBook}
                        setFormState={setFormState}
                        formState={formState}
                        handleAddTask={handleAddTask}
                        submitFlag={formSubmit}
                    />
                </div>
                <div className='flex flex-col xl:grid xl:grid-cols-2 gap-2 col-span-5 overflow-y-scroll max-h-96 rounded-[4px]'>
                {listEmpty ? (<h1 id='empty-list' className='text-white/80 px-6'>Your Goals go here.</h1>) : 
                    (tasks.map(task => {
                    if(task.book === currentBook) {
                        return <TodoCard
                        key={task.createdAt}
                        item={task}
                        markAsCompleted={markAsCompleted}
                        deleteTask={deleteTask}
                        addNotes={handleNotesChange}
                        />;
                    }   
                    return <></>;
                }))}
                </div>
            </div>
        </div>
    );
}
