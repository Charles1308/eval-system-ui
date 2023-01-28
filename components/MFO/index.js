import React from 'react';
import useUserStore from '../../hooks/useUserStore';
import MFO1 from './MFO1';

const MFOComponent = props => {
	const { user } = useUserStore(store => store);
	const { type, data } = props;

	console.log(user, type, data);
	// console.log(type,data.getPercentage());
	return (
		<div 
			style={{
				width: 'max-width',
				height: 'max-height',
				overflow: 'auto'
			}}
		>	
			<div
				style={{
					width: 'max-width',
					height: 'fit-content'
				}}
			>
				<div
					style={{
						textAlign: 'center'
					}}
				>
					<strong>{props?.title}</strong>
				</div>
				{type === 'MFO1' && <MFO1 {...data}/>}
				{/*{type === 'MFO2' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO3' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO4' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO5' && <MFO1 {...data}/>}*/}
			</div>
		</div>
	);
}

export default MFOComponent;