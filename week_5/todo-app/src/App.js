import logo from './logo.svg';
import './App.css';
import TodoList from './components/list';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { useDebugValue } from 'react';

function App() {
  
  const [books, setBooks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [book, setBook] = useState('');

  const handleBookChange = (event) => {
    setBook(event.target.value);
  }

  const addNewBook = () => {

  }

  return (
    <div className="overflow-hidden text-xl bg-lightGray h-screen w-full grid grid-cols-4 grid-rows-6 justify-items-center items-start">
      <div id='body-container' className='row-start-1 row-span-1 w-96 max-w-6xl md:w-4/5 lg:w-4/5 col-span-3 flex gap-2 h-20 my-24'>
        <h1 className='text-2xl md:text-4xl flex gap-2'>Welcome to <h1 className='font-bold'>BookTrackr.</h1></h1>
      </div>
      <div className='text-lg row-start-2 m-16 row-end-6 col-span-3 w-96 max-w-6xl md:w-4/5 lg:w-4/5 flex flex-col mx-4 gap-2 justify-between '>
        <div className='w-full mb-4 flex justify-between text-2xl' >
          <span>Your Goals</span>
          <div className='w-2/3 truncate flex justify-end relative items-center gap-3'>
            {books.length === 0 ? (
              <>
                <input
                  onChange={handleBookChange}
                  value={book}
                  placeholder='What book are you reading today?' 
                  className='font-bold bg-transparent text-right' />
                <button 
                  onClick={addNewBook} >
                  
                  <svg 
                    className={`h-6 relative top-px fill-darkGray transition-all duration-300 hover:fill-black hover:rotate-90 overflow-hidden ${book === '' ? 'w-0' : 'w-6'}`}
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill='none' stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                </button>

              </>

            ):(
              <>
                <h3 className='font-bold bg-transparent text-right text-black'>
                  {books[0]}
                </h3>
                <svg 
                  className='w-8 relative top-px fill-darkGray transition-all duration-300 hover:fill-black hover:rotate-180 hover:-translate-y-1' 
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"></path> </g></svg>
              </>
            )}
          </div>

          {/* <div className='flex gap-2 justify-between items-center'>
            <svg className='h-5' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M206 1920h548.571V0H206v1920ZM1714.571 0v1920H1166V0h548.571ZM617.43 137.143v1645.714H343.143V137.143h274.286Zm685.714 1645.714h274.286V137.143h-274.286v1645.714Z" fill-rule="evenodd"></path> </g>
              </svg>
            <span className='font-bold text-2xl'>25:00</span>
          </div> */}
        </div>
        <TodoList 
          tasks={tasks}
          setTasks={setTasks}
          setNotes={setNotes}
        />
      </div>

      <div className='col-start-4 w-full row-start-1 row-span-6 bg-gradient-to-br from-darkGray to-black/60 h-full p-12'>
        <Sidebar 
          items={notes}
        />
      </div>
      <div className='w-96 max-w-6xl md:w-4/5 lg:w-4/5 text-sm h-full col-start-1 col-end-4 row-start-6 flex justify-start items-center'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
