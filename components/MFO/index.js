import React from 'react';
import useUserStore from '../../hooks/store/useUserStore';
import useFormRequestsStore from '../../hooks/store/useFormRequestsStore';
import MFO1 from './MFO1';

const MFOComponent = props => {
	const { user } = useUserStore(store => store);
	const { setUrl, setMethod, setPayload } = useFormRequestsStore(store => store);
	const { type, data } = props;

	const [reqPayload, setReqPayload] = React.useState({});

	const handleSetPayload = _payload => {
		const tempPayload = { ...reqPayload, ..._payload };

		setReqPayload({ ...tempPayload });
	}

	React.useEffect(() => {
		setUrl('/api/v1/form/ipcr');
		setMethod('POST');
	}, []);

	React.useEffect(() => {
		setPayload(reqPayload);
	}, [reqPayload]);

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
				{type === 'MFO1' && <MFO1 {...data} onChange={handleSetPayload} />}
				{/*{type === 'MFO2' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO3' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO4' && <MFO1 {...data}/>}*/}
				{/*{type === 'MFO5' && <MFO1 {...data}/>}*/}
			</div>
		</div>
	);
}

export default MFOComponent;