import logo from './logo.svg';
import './App.css';
import TodoList from './components/list';
import { useState } from 'react';

function App() {

  

  return (
    <div className="overflow-x-hidden bg-lightGray min-h-screen w-full flex flex-col justify-start items-center">
      <div id='body-container' className='flex gap-2 h-20 my-10 mx-12 w-4/5'>
        <h1 className='text-4xl'>Welcome to </h1>
        <h1 className='font-bold text-4xl'>BookTrackr.</h1>
      </div>
      <div className='w-3/5 max-w-xl flex mx-4 justify-between text-xl' >
        <span>Your tasks</span>
        <span className='font-bold'>Book Name</span>
        <div className='flex gap-2 justify-between items-center'>
          <svg className='h-5' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M206 1920h548.571V0H206v1920ZM1714.571 0v1920H1166V0h548.571ZM617.43 137.143v1645.714H343.143V137.143h274.286Zm685.714 1645.714h274.286V137.143h-274.286v1645.714Z" fill-rule="evenodd"></path> </g>
            </svg>
          <span className='font-bold text-2xl'>25:00</span>
        </div>
      </div>
      
      <TodoList />

    </div>
  );
}

export default App;
