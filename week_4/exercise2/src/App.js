//react 

import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import Card from './components/card';

function App() {

  function signup() {
    console.log("signup");
  }

  function login()  {
    console.log("login");
  }

  function tryit() {
    console.log("try it");
  }

  return (
    <div className="">
      <header className="flex justify-between items-center w-[98%] border-black border-b-[1px] mt-4 ml-auto mr-auto">
        <div className='flex'>
        <img src="./logo.svg" ></img>
        <a className="pl-1" href="">Paynet.io</a>
        </div>
        <nav>
          <ul className='flex gap-5'>
            <li><a href="">Fees</a></li>
            <li><a href="">Carrers</a></li>  
            <li><a href="">FAQ</a></li>  
            <li><a href="">Contacts</a></li>  
            <li><a href="">About</a></li>  
          </ul>  
        </nav> 
        <div>
          <Button displayText="Sign Up" handleClick={signup}/>
          <span>/</span>
          <Button displayText="Log In" handleClick={login}/>
        </div>
      </header>
      <h1 className='text-9xl w-[70%] p-4'>Sending money abroad has never been cheaper.</h1>
      <p className='w-[55%] p-4'>Send money with no limits to over 140 counttries. Enjoy the live exchange rate with our flat $2 fee and a slick app that's made for you.</p>
      <div className='pl-4 p-2'>
        <Button displayText="Try It" bgColor="#000000" textCol="#FFFFFF" handleClick={tryit}/>
      </div>
      <div className='flex justify-start items-center p-4 mt-10 overflow-x-hidden gap-4'>
        <Card numOfSides={"0"} bgColor={"#6FA7E6"} internalColor={"#FFA4D3"}></Card>
        <Card numOfSides={"4"} bgColor={"#925FFF"} internalColor={"#CDFF00"}></Card>
        <Card numOfSides={"3"} bgColor={"#F9F800"} internalColor={"#E88DFF"}></Card>
        <Card numOfSides={"3"} bgColor={"#6FA7E6"}></Card>
        <Card numOfSides={"3"} bgColor={"#6FA7E6"}></Card>
      </div>
    </div>  
  );
}

export default App;
