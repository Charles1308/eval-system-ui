const VALID = true;
const INVALID = false;

const containsUppercase = (str) => /[A-Z]/.test(str);
const containsLowercase = (str) => /[a-z]/.test(str)
const containsNumbers = (str) => /[0-9]/.test(str)
const containsSpecialChars = (str) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);

const validationPassword = (password) => {
    if (
        containsUppercase(password) ||
        containsLowercase(password) ||
        containsNumbers(password) ||
        containsSpecialChars(password)
    ) {
        return VALID;
    } else {
        return INVALID;
    }
}

export default validationPassword;