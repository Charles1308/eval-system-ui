import React from 'react';
import uniqid from 'uniqid';
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import TargetField from "../Fields/MFO/TargetField";
import ActualField from "../Fields/MFO/ActualField";
import RateField from "../Fields/MFO/RateField";
import DOM_CONTENTS from "../../utils/consts/domContents";

const MFO1 = props => {
	const [target, setTarget] = React.useState({});
	const [actual, setActual] = React.useState({});

	console.log(props?.contents);

	const handleChange = (type, index) => (value) => {

		if (type === "target") {
			setTarget(target => ({
				...target,
				[index]: value
			}));
		} else {
			setActual(actual => ({
				...actual,
				[index]: value
			}));
		}
	}
	return(
		<>	
			{props?.contents?.map?.((content, parentIndex) => (
				<div key={parentIndex}>
					<div>
						<h3 className='m-0 p-0'>{content.title}</h3>
						{content?.subtitle && <small className='text-red display-block'>{ content?.subtitle }</small>}
					</div>
					<div>
						{content.fields.map((field, index) => (
							<div className='mfo-form-content-box'>
								<div style={{ width: '300px '}}>
									<small className='m-0 p-0'>{field.title}</small>
									{content?.subtitle && <small className='text-red display-block'>{ field?.subtitle }</small>}
								</div>
								<div style={{ width: '400px '}} className="d-flex flex-column justify-content-around">
									<TargetField DOMValues={field.dom.value.values} value={target[`${parentIndex}${index}`]} onChange={handleChange('target', `${parentIndex}${index}`)}/>
									<ActualField DOMValues={field.dom.value.values} value={actual[`${parentIndex}${index}`]} onChange={handleChange('actual', `${parentIndex}${index}`)}/>
									<RateField target={target[`${parentIndex}${index}`]} actual={actual[`${parentIndex}${index}`]}/>
								</div>
								<div className='display-flex flex-column grow-2' style={{ width: '300px '}}>
									{/* DOM */}
									<h5>{field.dom.value.label}</h5>
									{field.dom.value.values.map((dom, index) => (
										<h5>{dom.label} = {parseFloat(dom.value).toFixed(2)}</h5>
									))}
								</div>
							</div>
						))}
					</div>
					
					<br/>
					<hr/>
				</div>
			))}
		</>
	);
}

export default MFO1;