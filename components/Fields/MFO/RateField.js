import React from "react";

const RateField = ({ target, actual, onChange }) => {
    const rate = React.useMemo(() => {
        if (!target || !actual) {
            return 0;
        } else {
            return (target / actual) * 100;
        }
    }, [target, actual]);

    React.useEffect(() => {
        if (onChange) {
            onChange?.(rate);
        }
    }, [rate]);

    return <p>Rate: {parseFloat(rate).toFixed(0)}%</p>
}

export default RateField;