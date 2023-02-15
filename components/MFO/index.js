import React from 'react';
import useUserStore from '@hooks/store/useUserStore';
import useFormRequestsStore from '@hooks/store/useFormRequestsStore';
import useNotifStore from '@hooks/store/useNotifStore';
import MFO1 from './MFO1';

const MFOComponent = React.forwardRef((props, ref) => {
	const { user } = useUserStore(store => store);
	const { setUrl, setMethod, setPayload, url, payload } = useFormRequestsStore(store => store);
	const { setNotifs } = useNotifStore(store => store);
	const { type, data } = props;
	const { id = null, editMode = false } = data;

	const [reqPayload, setReqPayload] = React.useState({});
	
	const handleSetPayload = _payload => {
		const tempPayload = { ...reqPayload };
		tempPayload.data = { ...tempPayload.data, ...data.mfoData, ..._payload };
		let index = null;
		
		if (type === "MFO1") {
			index = 0;
		} else if (type === "MFO2") {
			index = 1;
		} else if (type === "MFO3") {
			index = 2;
		} else if (type === "MFO4") {
			index = 3;
		} else if (type === "MFO5") {
			index = 4;
		}

		if (index === null) {
			setNotifs({
				type: 'danger',
				message: 'Invalid MFO Type'
			});
            return console.error("Invalid MFO type");
        }

		setReqPayload({ index, type, ...tempPayload });
	}

	React.useEffect(() => {
		const url = `/api/v1/form/ipcr${editMode ? `/${id}` : ''}`;

		setUrl(url);
		setMethod(editMode ? 'PUT' : 'POST');
	}, [id, editMode]);

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

			ref={ref}
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
});

export default MFOComponent;