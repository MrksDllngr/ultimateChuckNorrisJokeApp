import React from 'react';
import './Searchbox.css'
const Searchbox = ({textvalue, pressedBtn}) => {


return(
	
		<input type = 'search'
		className='br4 grow'
		placeholder ='Search for Category'
		onChange={textvalue}
		onKeyPress={pressedBtn}
			/>
	
	
	);
	

}

export default Searchbox;