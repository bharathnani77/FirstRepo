/**
 *  This array is used for testing purposes.
 *  An array of weird valid and invalid emails
 */
export const EmailArray: string[] = [
  // Valid
  'joe.user%mitvma.bitnet@cuny.edu',
  '!one!two!three!exampleUser@example.net',
  '/G=Joe/S=Blow/O=MMNY/A=ATT/C=US@gateway.example.com',
  'joe.user+w3c@example.com',
  'ææøæøøpåæÆÅØÆØøæøåøÆØÅÆØØÅæ@gÆÅØmail.coØÅÆæøæådm',
  'foo=modulw@efefa.sdf',
  'foo@xn--maana-pta.com',

  'email@example.com',
  'firstname.lastname@example.com',
  'email@subdomain.example.com',
  'firstname+lastname@example.com',
  'email@123.123.123.123',
  'email@[123.123.123.123]',
  '"email"@example.com',
  '1234567890@example.com',
  'email@example-one.com',
  '_______@example.com',
  'email@example.name',
  'email@example.museum',
  'email@example.co.jp',
  'firstname-lastname@example.com',
  // Unusual valid emails
  // Comments can't handled by a single regexp - See http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html
  'much."more unusual"@example.com',
  'very.unusual."@".unusual.com@example.com',
  'very."(),:;<>[]".VERY."very@\\\\\\ "very".unusual@strange.example.com',

  // Invalid
  'plainaddress',
  '#@%^%#$@#$@#.com',
  '@example.com',
  'Joe Smith <email@example.com>',
  'email.example.com',
  'email@example@example.com',
  '.email@example.com',
  'email.@example.com',
  'email..email@example.com',
  'あいうえお@example.com',
  'email@example.com (Joe Smith)',
  'email@example',
  'email@-example.com',
  'email@example.web',
  'email@111.222.333.44444',
  'email@example..com',
  'Abc..123@example.com',

  '"(),:;<>[]@example.com',
  'just"not"right@example.com',
  'this is"really"not\\\\allowed@example.com',
];
