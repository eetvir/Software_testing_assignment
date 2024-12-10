# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, testing files and configs to testers, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## How to run tests
To run our unit tests and generate coverage report locally Node.js and npm are required.

Node.js can be downloaded from [here](https://nodejs.org/en) and npm can be installed through command

prompt using command:
```
npm install
```

Once the necessary components are installed, unit tests can be run using the following
commands in the root folder:
```
npm test

npm run test -- --coverage
```