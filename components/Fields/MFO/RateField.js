import React from "react";

import {
    InputGroup,
    InputGroupText,
    Input,
} from "reactstrap";

const RateField = ({ target, actual, onChange }) => {
    const [rate, setRate] = React.useState(null);

    React.useEffect(() => {
        if ((target !== null && target === 0) || (actual !== null && actual === 0)) {
            setRate(0);
        } else {
            setRate((actual / target) * 100);
        }
    }, [target, actual]);

    React.useEffect(() => {
        if (!isNaN(rate) && rate !== null) {
            onChange?.(rate);
        }
    }, [rate]);

    return (
        <div className="my-2">
            <InputGroup>
                <InputGroupText>Rate: </InputGroupText>
                <Input 
                    defaultValue={!isNaN(rate) && rate !== null ? parseFloat(rate).toFixed(0) + "%" : ""}
                    disabled
                    placeholder="Rate"
                />
            </InputGroup>
        </div>
    )
}

export default RateField;