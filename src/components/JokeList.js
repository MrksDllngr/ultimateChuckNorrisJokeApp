import React from 'react';
import Jokebox from './Jokebox';


const JokeList = ({jokes}) => {
	const JokeMap = jokes.map ((user, i)=> {

		return(
			<Jokebox props = {jokes[i].value}
			key = {i}/>

			)

	})

	return(

		<div>
			{JokeMap}

		</div>
	
		)

}



export default JokeList;