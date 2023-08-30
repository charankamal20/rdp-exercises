import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import imagePath from './images/card.png'


function App() {
  return (
    <div className='ml-auto mr-auto mt-6 w-fit grid grid-cols-3 gap-3'>
      <Card path={imagePath} subheading="Thoughts" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
      <Card path={imagePath} subheading="Tools" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
      <Card path={imagePath} subheading="Side Projects" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
      <Card path={imagePath} subheading="Design Systems" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
      <Card path={imagePath} subheading="Design Systems" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
      <Card path={imagePath} subheading="Side Projects" time="4 min" heading="The evolution of design thinking: insights and perspectives" ></Card>
    </div>
  );
}

export default App;
