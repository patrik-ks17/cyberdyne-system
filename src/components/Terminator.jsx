import React from 'react';

const Terminator = (props) => {
	return(
		<div className='bg-light-blue dib br3 pa3 ma2 grow'>
			<img src='https://robohash.org/t?size=180x180' alt='terminator' />
			<div>
			 	<h2>{props.name}</h2>
    			<p>SN: {props.serialNumber}</p>
			</div>
		</div>
  );
}

export default Terminator;