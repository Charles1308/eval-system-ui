import React from 'react';
import useFormRequestsStore from '@hooks/store/useFormRequestsStore';
import useNotifStore from '@hooks/store/useNotifStore';
import MFO from './MFO';
import Result from './Result';
import _ from 'lodash';

import { 
	FormGroup,
	InputGroup,
	Input,
	Label,
	Badge,
} from 'reactstrap';

const MFOComponent = React.forwardRef((props, ref) => {
	const { setUrl, setMethod, setPayload, setPayloads, payloads } = useFormRequestsStore(store => store);
	const { setNotifs } = useNotifStore(store => store);
	const { type, data, formType } = props;
	const { id = null, editMode = false } = data;
	const [designation, setDesignation] = React.useState('Ratee');
	const [facultyRank , setFacultyRank] = React.useState('Professor');

	const successIndicators = React.useMemo(() => 
		data?.percentage?.getPercentage(designation, type), 
	[type, data, designation])

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

		setReqPayload({ ...tempPayload, index, type, designation, facultyRank });
	}

	React.useEffect(() => {
		const url = `/api/v1/form/${formType?.toLowerCase?.()}${editMode ? `/${id}` : ''}`;

		setUrl(url);
		setMethod(editMode ? 'PUT' : 'POST');
	}, [id, editMode, formType]);

	React.useEffect(() => {
		setPayload(reqPayload);
	}, [reqPayload]);

	React.useEffect(() => {
		if (payloads.length) {
			setDesignation(() => payloads?.[0]?.designation);
			setFacultyRank(() => payloads?.[0]?.facultyRank);
		}
	}, [payloads]);

	React.useEffect(() => {
		if (payloads) {
			const tempPayloads = payloads.map(payload => ({
				...payload,
				designation,
				facultyRank,
			}))

			setPayloads(tempPayloads);
		}
	}, [designation, facultyRank]);

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
				<FormGroup>
					<Label for='designation-select'>Designation</Label>
					<InputGroup className="input-group-alternative">
						<Input id="designation-select" type="select" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)}>
							<option> Ratee </option>
							<option> Vice President </option>
							<option> Chancellor </option>
							<option> Vice Chancellor for Academic Affairs </option>
							<option> Vice Chancellor for Administration and Finance </option>
							<option> Vice Chancellor for Research, Development and Extension Services </option>
							<option> Vice Chancellor for Development and External Affairs </option>
							<option> Director </option>
							<option> Campus Director </option>
							<option> Assistant Director (Admin and Finance) </option>
							<option> Assistant Director (Academic Affairs) </option>
							<option> Dean </option>
							<option> Faculty Researcher, Not Designated (1 project) </option>
							<option> Faculty Researcher, Not Designated (2 projects) </option>
							<option> Faculty with Special Administrative Assignment </option>
							<option> Faculty Researcher, Designated (1 project) </option>
							<option> Faculty Researcher, Designated (2 projects) </option>
							<option> Department Chair (Instructor/Assistant Professor) </option>
							<option> Department Chair (Associate Professor/Professor) </option>
							<option> Program Chair (Instructor/Assistant Professor) </option>
							<option> Program Chair (Associate Professor/Professor) </option>
							<option> Coordinator  (Instructor/Assistant Professor) </option>
							<option> Coordinator (Associate Professor/Professor) </option>
							<option> Instructor </option>
							<option> Assistant Professor </option>
							<option> Associate Professor </option>
							<option> Professor </option>
							<option> Administrative Staff </option>
							<option> Guest Lecturer </option>
						</Input>
					</InputGroup>
				</FormGroup>
				<FormGroup>
					<Label for='faculty-rank-select'>Faculty Rank</Label>
					<InputGroup className="input-group-alternative">
						<Input id="faculty-rank-select" placeholder="Faculty Rank" type="select" value={facultyRank} onChange={(e) => setFacultyRank(e.target.value)}>
							<option> Professor </option>
							<option> Instructor </option>
							<option> Assistant Professor </option>
							<option> Associate Professor </option>
							{/* <option> Guest Lecturer </option> */}
							{/* <option> Administrative Staff </option> */}
							{/* <option> Coordinator (Associate Professor/Professor) </option> */}
							{/* <option> Coordinator  (Instructor/Assistant Professor) </option> */}
						</Input>
					</InputGroup>
				</FormGroup>
				<hr/>
				<Badge color="info" style={{ width: '100%' }}>
					<h5 className='p-0'>{ `Success Indicator for ${type}: ` + successIndicators + '%' }</h5>
				</Badge>
				<hr/>
						
				<MFO {...data} formType={formType} type={type} onChange={handleSetPayload} />
				{type === "MFO5" ? <Result/> : null}
			</div>
		</div>
	);
});

export default MFOComponent;