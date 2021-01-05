import React from 'react';
//import './Jokebox.css';

const Jokebox = ({props}) => {

	return(
		<div className="Jokeboxes tc bg-light-blue br3 pa2 ma5 grow bw2 shadow-5 measure">

			<p className='Joketext'>{props}</p>

		</div>
		);
}

export default Jokebox;