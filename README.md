# Workflow CA

This project is focused on improving the quality of a software package by implementing effective development workflows, leveraging the knowledge and skills acquired in our course. It encompasses the use of various web technologies and testing tools to ensure a more efficient and error-resilient development process.

## Description

Throughout the course, we've learned how to streamline the development workflow and emphasize quality through testing and automation. This project serves as a practical application of those principles, where a combination of HTML, Bootstrap, SASS, JavaScript, Jest, and Cypress are used to build and test a web package.

## Technologies Used

- HTML
- Bootstrap
- SASS
- JavaScript
- Jest
- Cypress
- Prettier
- EsLint
- Babel
- Husky

## Installation

To get this project up and running on your local machine for development and testing purposes, simply follow the steps below:

- npm install

This command installs all the necessary dependencies required for the project.

## Usage - bash

Here are some common commands and tasks you can execute to interact with the project:

- To run the application locally: npm start

- To compile SASS files into CSS: npm run build

- To run Jest tests: npm run test

- To run Cypress tests interactively: npm run test-e2e

- To run Cypress tests in the command line: npm run test-e2e-cli

## Automated Testing on PR

The tests are configured to run automatically on Pull Requests. This ensures that every change proposed goes through a rigorous testing process, catching issues early and maintaining code quality throughout the development cycle.

The E2E tests that the login works as intended. The user will not be able to log in with wrong or unknown credentials, and the user can log out correctly and safely.

The unit tests that the login function saves the user's JWT token in storage and that it is removed when logging out.

# Status Badges

[![Automated E2E Testing](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/E2E-test.yml/badge.svg)](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/E2E-test.yml)

[![Automated Unit Testing](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/unit-test.yml)

[![Code Review](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/gpt.yml/badge.svg)](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/gpt.yml)

[![Deploy static content to Pages](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/Spookyrumble/Workflow-CA/actions/workflows/pages.yml)

## Credits

- **Noroff**: The institution that has facilitated this educational journey.
- **Oliver Dipple**: Our tutor for the course, whose guidance has been instrumental in learning these skills.

## Note for Contributors

This project is part of a school assignment and is not open for external contributions. However, feedback and suggestions are always welcome.

## Acknowledgments

Special thanks to Oliver Dipple and Abiodun Abudu for providing us with insights and hands-on expertise that greatly enhanced our learning experience.
