import React from 'react';
import uniqid from 'uniqid';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";

const getSelfValue = (percentage, dependencyTotalNumber) => Math.floor(dependencyTotalNumber * (percentage / 100));

const BaseInputField = props => {
	const { 
        DOMValues, 
        dependencyTotalNumber = null,
        type = 'Actual',
        value = null,
    } = props;
    
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const isTargetField = type === 'Target';
    
    const toggle = () => setDropdownOpen((prevState) => !prevState);
	const selfValue = React.useMemo(() => {
		if (dependencyTotalNumber >= 0 && value) {
			return getSelfValue(value, dependencyTotalNumber);
		}
	}, [value, dependencyTotalNumber]);

	return (
		<>
			{DOMValues?.length
				?	(
						<Dropdown isOpen={dropdownOpen} toggle={toggle}>
							<DropdownToggle
								caret
								color="secondary"
								id="DOM-dropdown"
								type="button"
					        >
					          {DOMValues?.filter?.((dom) => dom.value === value)?.[0]?.label ||
                              `Please choose a ${type} value`}
					        </DropdownToggle>
					        <DropdownMenu aria-labelledby="dropdownMenuButton">
				        		{DOMValues.map(item => (
			        				<DropdownItem key={uniqid()} active={value === item.value} onClick={() => props?.onChange?.(item.value)}>
							            {item.label}
							        </DropdownItem>
				        		))}
					        </DropdownMenu>
						</Dropdown>
					)
				: 	(
						<InputGroup>
							{isTargetField && dependencyTotalNumber && 
                            <InputGroupText>
								{`Target: ${selfValue || "0"}`}
						    </InputGroupText>}
						    <Input 
                                defaultValue={value}
								type="number" 
								placeholder="Please enter Target value"
								onChange={e => {
                                    if (isTargetField) {
										props?.onChange?.(e.target.value);
                                    } else {
                                        props?.onChange?.(e.target.value);
                                    }
                                }}	
							/>
						</InputGroup>
					)
			}
		</>
	);
}

export default BaseInputField;