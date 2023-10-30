import React from 'react'
import Timer from "./components/timer"
import Tooltip from './components/tooltip';
import SampleComponent from './components/sampleComponent';

function App() {

  return (
    <div className='m-10 w-full grid grid-cols-4 justify-center items-center'>
      <Timer />
      <Tooltip />
      <SampleComponent />
    </div>
  );
}

export default App;



