import React from 'react';
import Terminator from './Terminator';

const TerminatorList = ({ models }) => { 
	return (
		<div>
		{
		models.map((model) => {
			return (
				<Terminator
					key={model.id}
					id={model.id}
					name={model.name}
					serialNumber={model.serialNumber}
				/>
			)
		})
		}
		</div>
	);
};

export default TerminatorList;