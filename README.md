# typescript-express-template

Template project for an express application using typescript. The basic outline of this template was taken from this [medium article](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d). The template has been modified to include testing.

## Setup

* clone the respsitory to your computer
* run `npm install`

## Running Server

### Development

Run `npm run dev`

### Production

Run `npm run prod`

## Testing

Testing is included using [Jasmine](https://jasmine.github.io/). The tests are run using [jasmine-ts](https://www.npmjs.com/package/jasmine-ts). By default the test files are stored in the same directory as the file they test with the extension _.spec.ts_, this value is set in the jasmine.json config file. A basic test is included for testing the setup of the project.  

Run `npm run test`
