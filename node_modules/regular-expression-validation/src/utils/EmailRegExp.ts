/**
 * Email regexp with nordic countries in mind
 *
 * It does not deal with comments in the email
 *
 * Based on the regexp from MDN found at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listOfemails/email
 *
 * Expanded upon based on https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */

export const EmailExp: RegExp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?(?:\.[a-zA-ZæøåÆØÅ0-9](?:[a-zA-ZæøåÆØÅ0-9-]{0,61}[a-zA-ZæøåÆØÅ0-9])?)*$/;
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
export function EmailValidation(pattern: RegExp, emailInput: string) {
  console.info('The input:' + emailInput);
  /** Declare utilities */
  let Email: string = '';
  let isInputValid: Boolean = false;

  /** Pattern checking is a boolean action */
  let patternExecution: Boolean;

  /** If the input's a string */
  if (typeof emailInput == 'string') {
    let email: string = `${emailInput}`;
    patternExecution = pattern.test(email);
    Email = email;
    if (!patternExecution) {
      isInputValid = false;
      console.info(`The invalid email:\n ${Email}`);
    } else {
      isInputValid = true;
      console.info(`The valid email:\n ${Email}`);
    }
  }

  return isInputValid;
}

// console.info(EmailValidation(EmailExp, EmailArray));
