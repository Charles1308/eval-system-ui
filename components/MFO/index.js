import React from 'react';

const MFOComponent = props => {
	const { type, data } = props;

	return (
		<>
			{ data.title }
		</>
	);
}

export default MFOComponent;