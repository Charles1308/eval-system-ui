const MIN_LEN = 8;
const MAX_LEN = 22;

const VALID = true;
const INVALID = false;

const validationLength = (min = MIN_LEN, max = MAX_LEN) => (str) => {
    const len = str.length;

    if (len < min || len > max) return INVALID;
    
    return VALID;
}

export default validationLength;