import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUp'

function App() {

  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={logo} className='w-20 h-20 m-2' alt='logo' />
      <h1 className='text-2xl font-bold'>Hello World!</h1>
      <div className='flex flex-col items-end m-6 border border-gray-700 p-4 rounded-lg'>
        <SignUp />
      </div>
    </div>
  );
}

export default App;
