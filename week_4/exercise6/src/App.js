import logo from './logo.svg';
import './App.css';
import Button from './components/button.js';
import Banner from './components/banner';
import { useState } from 'react';

function App() {
	
  	const [focusedId, setFocusId] = useState(1);	

	const handleFocus = (buttonId) => {
		setFocusId(buttonId);
	};
  

  return (
	<div className="flex-col ml-auto mr-auto max-w-2xl items-center justify-center">
	  
	  <div id="button-container" className='w-full grid grid-cols-3 bg-black/20 rounded-xl mt-5 mb-3'>
			<Button 
				buttonId={1}
				onClick={handleFocus}
				buttonText="Recent"
				focused={focusedId === 1} />
			
			<Button 
				buttonId={2}
				onClick={handleFocus}
				buttonText="Popular"
				focused={focusedId === 2} />
			
			<Button 
				buttonId={3}
				onClick={handleFocus}
				buttonText="Trending"
				focused={focusedId === 3} />
	  </div>

	  <Banner 
	  	bannerId={1}
		focused={focusedId === 1}
		date1={"Jan 7"}
		comments1={"29"}
		shares1={"16"}
		date2={"Mar 19"}
		comments2={"24"}
		shares2={"12"}
	  />
	  <Banner 
	  	bannerId={2}
		focused={focusedId === 2}
	  	comments1={"29"}
		date1={"Jan 7"}
		shares1={"16"}
		date2={"Mar 19"}
		comments2={"24"}
		shares2={"12"}
	  />
	  <Banner 
	  	bannerId={3}
		focused={focusedId === 3}
	  	comments1={"29"}
		date1={"Jan 7"}
		shares1={"16"}
		date2={"Mar 19"}
		comments2={"24"}
		shares2={"12"}
	  />
	</div>
  );	
}

export default App;
