# Regular Expressions for JavaScript

Made for the purpose of validating strings and arrays with regular expressions.

This package exposes API's through `/lib`. So far you can:

## Validate a single email

```js
import {
  EmailValidation,
  EmailExp,
} from 'regular-expression-validation/lib/EmailRegExp';

EmailValidation(EmailExp, 'validate@this.email.com');
```

## Validate an array of emails

```js
import {
  EmailArrayValidation,
  EmailExp,
} from 'regular-expression-validation/lib/EmailArrayRegExp';
import { EmailArray } from 'regular-expression-validation/lib/EmailArray';

const myEmailArray = EmailArray;

EmailArrayValidation(EmailExp, myEmailArray);
```

## An array of emails for testing

```js
import { EmailArray } from 'regular-expression-validation/lib/EmailArray';

console.info(`An array of emails:\n${EmailArray}`);
```

## Getting Started with development

> These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### [VS Code](https://code.visualstudio.com/) is a must-have for this project

Some extentions for VS Code are needed to fully utilise the config files.

* Prettier
* Eslint
* Stylelint

Install them from the 'Extensions' tab or use the code quick open (`CTRL+P`) and run these commands:

```bash
ext install esbenp.prettier-vscode
ext install shinnn.stylelint
ext install dbaeumer.vscode-eslint
```

The above list will get updated and separated into a needed and a practical extensions lists. For now, my entire settings file - including styling - is in the .vscode folder and would give an idea on what extensions to install if anything doesn't seem right.

#### This project is developed in TypeScript, make sure your environment supports this.

### Installing

> A step by step series of examples that tell you have to do to get a development env running

This codebase is managed with [yarn](https://yarnpkg.com/en/docs/install), npm can be used but is **not** tested.

Clone the repo:

```bash
git clone git@github.com:MathiasKandelborg/Regular-Expressions.git
```

With HTTPS:

```bash
git clone https://github.com/MathiasKandelborg/Regular-Expressions.git
```

Go into the directory and install dependencies:

```bash
cd ./Regular-Expressions
yarn
```

You might have to re-compile the ts files to avoid errors:

```bash
tsc
```

End with an example of getting some data out of the system or using it for a little demo

Run the development server, `localhost:1234` becomes available with HmR

```bash
yarn start
```

To run the [storybook](https://storybook.js.org) for the visual part of validation:

* **Note that the typings dir have to exist before running `yarn storybook`, otherwise the imports from the compiled output files will be wrong**

```bash
yarn storybook
```

## Running the tests

There aren't any tests yet. I'm not sure if any ever will be made.

This is a project made for playing with TS and i don't see much reason in adding tests when the project is so small. If the project grows a bit more, some tests will be added along with some kind of CI to go with it.

### Coding style tests

These will be added with next release version, as package.json script commands.

## Deployment

Well, this package doesn't belong on a webser on its own, does it?😉

That being said, this part will be updated with instructions on running the storybook build command _and_ on how to publish this code as a npm module. If the project grows i might add gh-pages, Heroku or something like that.

## Built With

* [TypeScript](http://www.typescriptlang.org/) - Programming language (superset of JS) + build tool
* [Prettier](https://prettier.io/) - Code formatter
* [Yarn](https://yarnpkg.com/en/) - Dependency Management
* [Storybook](https://storybook.js.org) - Used to create interactive 'stories' based on code.
* [Parcel](https://parceljs.org/) - Development server and possible build tool

## Contributing

There's not a custom file yet, until then;

Please read [the boilerplate CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MathiasKandelborg/Regular-Expressions/tags).

## Authors

* **Mathias Wøbbe** - _Initial work_ - [MathiasKandelborg](https://github.com/MathiasKandelborg)

See also the list of [contributors](https://github.com/MathiasKandelborg/Regular-Expressions/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Generally, i won't do anything if you use my code. I do strongly recommend to test it thoroughly if you're going to use it in production.

## Acknowledgments

* [PurpleBooth](https://gist.github.com/PurpleBooth) - README.md and CONTRIBUTIONS.md templates
* [Kriasoft and all the people at RSK](https://github.com/kriasoft/react-starter-kit) - I learned a lot about configuration from using this repo. My config files mostly look like theirs because of all the practices I've taken with me.
