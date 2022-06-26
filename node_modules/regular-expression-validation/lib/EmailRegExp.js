"use strict";
/**
 * Email regexp with nordic countries in mind
 *
 * It does not deal with comments in the email
 *
 * Based on the regexp from MDN found at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listOfemails/email
 *
 * Expanded upon based on https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */
exports.__esModule = true;
exports.EmailExp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?(?:\.[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?)*$/;
/**
 * Validate an email _string_
 * @param pattern A RegExp for email validation
 * @param emailInput A string
 *
 * **NOTE:** The actual validation should happen on the server,
 * there are lots of ways to get around validation on the client
 *
 * **It is not secure to rely solely on client-side validation**
 */
function EmailValidation(pattern, emailInput) {
    console.info('The input:' + emailInput);
    /** Declare utilities */
    var Email = '';
    var isInputValid = false;
    /** Pattern checking is a boolean action */
    var patternExecution;
    /** If the input's a string */
    if (typeof emailInput == 'string') {
        var email = "" + emailInput;
        patternExecution = pattern.test(email);
        Email = email;
        if (!patternExecution) {
            isInputValid = false;
            console.info("The invalid email:\n " + Email);
        }
        else {
            isInputValid = true;
            console.info("The valid email:\n " + Email);
        }
    }
    return isInputValid;
}
exports.EmailValidation = EmailValidation;
// console.info(EmailValidation(EmailExp, EmailArray));
