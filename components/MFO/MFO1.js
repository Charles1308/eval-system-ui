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
import BaseInputField from '../Fields/MFO/BaseInputField';

const MFO1 = props => {
	const [target, setTarget] = React.useState({});
	const [actual, setActual] = React.useState({});
	const [rate, setRate] = React.useState({});
	const [otherField, setOtherField] = React.useState({});

	const onlyOneDependencyField = (fields) => {
		if (!fields || !fields?.length) return true;
		const isTrue = fields?.some?.(field => field?.for?.length);

		if (!isTrue) {
			console.warn('Found more than 1 dependency field');
		}

		return isTrue;
	}

	const handleChange = (type, index, valueType = null) => (value) => {
		switch (type) {
			case "target":
				setTarget(target => ({
					...target,
					[index]: value
				}));
				break;
			
			case "actual":
				setActual(actual => ({
					...actual,
					[index]: value
				}));
				break;

			case "rate":
				setRate(rate => ({
					...rate,
					[index]: value
				}));
				break;

			default:
				setOtherField(otherField => ({
					...otherField,
					[index]: {
						...otherField[index],
						[valueType]: value,
					}
				}));
				break;
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
						{content.fields.map((field, fieldIndex) => (
							<div key={`${parentIndex}${fieldIndex}`} className='mfo-form-content-box'>
								<div style={{ width: '300px '}}>
									<small className='m-0 p-0'>{field.title}</small>
									{content?.subtitle && <small className='text-red display-block'>{ field?.subtitle }</small>}
								</div>
								<div style={{ width: '400px '}} className="d-flex flex-column justify-content-around">
									{onlyOneDependencyField(field.other_fields) && field.other_fields?.map?.((other_field, otherIndex) => {
										const preKey = other_field?.for === "Target" ? "-for-target" : otherIndex;
										const key = `${parentIndex}${fieldIndex}${preKey}`;
										
										return (
											<BaseInputField
												key={key}
												DOMValues={other_field?.dom?.value?.contents?.[other_field?.key]?.values}
												onChange={handleChange(null, key, 'total')}
												value={otherField[key]?.total}
												placeHolder={other_field.title}
											/>
										)
									})}
									<TargetField 
										id={`${parentIndex}${fieldIndex}`}
										DOMValues={field?.dom?.value?.contents?.[field?.for]?.values} 
										dependencyTotalNumber={otherField[`${parentIndex}${fieldIndex}-for-target`]?.total}
										value={target[`${parentIndex}${fieldIndex}`]} 
										onDepTotalChange={handleChange(null, `${parentIndex}${fieldIndex}-for-target`, 'value')}
										onChange={handleChange('target', `${parentIndex}${fieldIndex}`)}
									/>
									<ActualField 
										id={`${parentIndex}${fieldIndex}`}
										DOMValues={field?.dom?.value?.contents?.[field?.for]?.values} 
										value={actual[`${parentIndex}${fieldIndex}`]} 
										onChange={handleChange('actual', `${parentIndex}${fieldIndex}`)}	
									/>
									<RateField 
										target={otherField[`${parentIndex}${fieldIndex}-for-target`]?.value ?? target[`${parentIndex}${fieldIndex}`]} 
										actual={actual[`${parentIndex}${fieldIndex}`]}
										onChange={handleChange('rate', `${parentIndex}${fieldIndex}`)}
									/>
								</div>
								<div className='display-flex flex-column grow-2' style={{ width: '300px '}}>
									{/* DOM */}
									{Object.keys(field?.dom?.value?.contents || {}).map((key, domIndex) => (
										<div key={`${domIndex}${parentIndex}${fieldIndex}`}>
											<h5>{field?.dom?.value?.contents[key].label}</h5>
											{field?.dom?.value?.contents[key].values.map((dom, valueIndex) => (
												<h5 key={valueIndex+dom.label}>{dom.label} = {parseFloat(dom.value).toFixed(2)}</h5>
											))}
										</div>
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