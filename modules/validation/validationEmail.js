import * as smtp from '@utils/consts/smtpDomains';

const INVALID = false;
const VALID = true;

const validationEmail = (email) => {
    if (!email.length) return INVALID;

    const sliced = email.split('@');
    if (sliced.length < 2) return INVALID;
    
    const domain = slide[1];
    if (smtp.TEST_DOMAINS.includes(domain) || smtp.TEST_DOMAINS.includes(domain)) {
        return VALID;
    } else {
        return INVALID;
    }
}

export default validationEmail;