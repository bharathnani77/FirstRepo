"use strict";
exports.__esModule = true;
/**
 * Email regexp with nordic countries in mind
 *
 * It does not deal with comments in the email
 *
 * Based on the regexp from MDN found at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listOfemails/email
 *
 * Expanded upon based at: https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */
exports.EmailExp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?(?:\.[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?)*$/;
/**
 * Validate an _array_ of emails
 * @param pattern A RegExp for email validation
 *
 * @param emailInput An array of strings
 *
 * **NOTE:** The actual validation should happen on the server,
 * there are lots of ways to get around validation on the client
 *
 * **It is not secure to rely solely on client-side validation**
 */
function EmailArrayValidation(pattern, emailInput) {
    console.info('The input:' + emailInput);
    /** Declare utilities */
    var ValidEmails = [];
    var InvalidEmails = [];
    var IsInputValid = false;
    /** Pattern checking is a boolean action */
    var patternExecution;
    /** If the input's an array */
    if (typeof emailInput != 'string') {
        var listOfEmails = emailInput;
        listOfEmails.map(function (emailInput) {
            patternExecution = pattern.test(emailInput);
            if (patternExecution) {
                ValidEmails.push(emailInput);
                IsInputValid = true;
            }
            else {
                InvalidEmails.push(emailInput);
                IsInputValid = false;
            }
        });
    }
    console.dir('The valid emails:\n', ValidEmails);
    console.dir('The invalid emails:\n', InvalidEmails);
    return IsInputValid;
}
exports.EmailArrayValidation = EmailArrayValidation;
// console.info(EmailValidation(EmailExp, EmailArray));
