import React from 'react';

const useValidation = (validator, value = '') => {
    const isValid = React.useMemo(() => validator(value));
    
    return isValid;
}

export default useValidation;