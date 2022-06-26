/**
 * Email regexp with nordic countries in mind
 *
 * It does not deal with comments in the email
 *
 * Based on the regexp from MDN found at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listOfemails/email
 *
 * Expanded upon based on https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489
 */
export declare const EmailExp: RegExp;
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
export declare function EmailValidation(pattern: RegExp, emailInput: string): Boolean;
