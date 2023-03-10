import React from 'react';
import uniqid from 'uniqid';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  InputGroupText,
  InputGroup,
  Input,
  Label,
} from "reactstrap";

const getSelfValue = (percentage, dependencyTotalNumber) => Math.floor(dependencyTotalNumber * (percentage / 100));

const BaseInputField = props => {
	const { 
        DOMValues, 
        dependencyTotalNumber = null,
        type = null,
        value = null,
		disabled,
    } = props;
    
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const isActualField = type === 'Actual';
    const isTargetField = type === 'Target';
    
    const toggle = () => setDropdownOpen((prevState) => !prevState);
	const selfValue = React.useMemo(() => {
		if (dependencyTotalNumber !== null && dependencyTotalNumber >= 0 && value) {
			return getSelfValue(parseInt(value), dependencyTotalNumber);
		} else {
			return 0;
		}
	}, [value, dependencyTotalNumber]);

	React.useEffect(() => {
		if (!isNaN(dependencyTotalNumber) && dependencyTotalNumber > 0) {
			props?.onDepTotalChange?.(selfValue); // percentage
		}
	}, [selfValue, dependencyTotalNumber]);

	return (
		<>
			{DOMValues?.length
				?	(
						<div className='my-2'>
							{(props?.placeHolder || type) && <Label size='sm'>{ props?.placeHolder || type }</Label>}
							<br/>
							<Dropdown isOpen={dropdownOpen} toggle={toggle} style={{ width: '100%' }} disabled={disabled}>
								<DropdownToggle
									caret
									color="secondary"
									id="DOM-dropdown"
									type="button"
									style={{ width: '100%' }}
								>
								{DOMValues?.filter?.((dom) => dom.value === value)?.[0]?.label ||
								`Please choose a value`}
								</DropdownToggle>
								<DropdownMenu aria-labelledby="dropdownMenuButton">
									{DOMValues.map(item => (
										<DropdownItem key={uniqid()} active={value === item.value} onClick={() => props?.onChange?.(item.value)}>
											{item.label}
										</DropdownItem>
									))}
								</DropdownMenu>
							</Dropdown>
						</div>
					)
				: 	(
						<div className='my-2'>
							{(props?.placeHolder || type) && <Label size='sm' for={props?.id}>{ props?.placeHolder || type }</Label>}
							<InputGroup>
								{(!isNaN(dependencyTotalNumber) && dependencyTotalNumber) 
									?   <InputGroupText>
											{`Target: ${selfValue || 0}`}
										</InputGroupText>
									: null
								}
								<Input 
									id={props?.id}
									disabled={disabled}
									defaultValue={parseInt(value || 0)}
									type="number" 
									placeholder={
										isTargetField ? "Please enter Target value" :
										isActualField ? "Please enter Actual value" :
										props?.placeHolder?.length ? props.placeHolder : "Please enter a value"
									}
									onChange={e => props?.onChange?.(parseInt(e.target.value))}	
								/>
								{(!isNaN(dependencyTotalNumber) && dependencyTotalNumber) 
									?   <InputGroupText>
											{`%`}
										</InputGroupText>
									: null
								}
							</InputGroup>
						</div>
					)
			}
		</>
	);
}

export default BaseInputField;