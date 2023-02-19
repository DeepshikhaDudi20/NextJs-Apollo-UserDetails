# Next-Apollo-UserDetails

## About Project

The purpose of this project is to display the list of user details in a grid of card tiles
from (https://www.npmjs.com/package/casual) using TypeScript, NextJs, GraphQL, and Apollo.
The project has been developed using the TDD approach with React Testing Library, Jest, and used Cypress for e2e testing.

_The Application has the following web pages_

- Home Page: It has a link to fetch a list of user details and navigate to the user-list page.
- User List Page: Renders user details for 20 users in Grid view from casual API using GraphQL query. It has a Load More
  User button to load 20 more users. In desktop view, it shows 4 cards in a row and in mobile view, it shows 2 cards in
  a row.

## Implemented the following in Project

- Optimized component performance using Suspense Lazy 
- Created schema and resolvers for GraphQL to fetch API data
- UserList page created in Nextjs and used useContext hook for global state
- Created custom hook useInifiniteScrolling to fetch data in case the load more button is not there using
  IntersectionObserver.
- Load more button to display next 20 user cards
- React Testing Library and Jest used for Unit testing
- Dockerised the server and client app, created docker-compose.yml to run the project locally independent of system

## Additional

- Used eslint-config-next package to check linting and accessibility errors
- Used Cypress for e2e testing
- Deployed app on Vercel

# Project Styling

- Used Styled Component Styling Library, also used package "babel-plugin-styled-components" to have dynamic class names.
- Defined colors for application in a single file (no hardcoding, easy to manage)

## Accessibility as per WCAG 2.1 - AA standards

- Checklist {https://www.w3.org/WAI/WCAG21/quickref/} : to confirm the project is meeting WCAG 2.1 - AA standards
- Made it screen readers compliant by providing appropriate roles and aria-\* attributes to elements
- Pressing the TAB or SHIFT + TAB keys to allow the user to navigate and interact with interactive elements on the
  page. (On the user list page, links like phone number, email, and load more users button element. TAB moves to the
  next element, SHIFT + TAB moves to prev element)
- Used Siteimprove Accessibility Checker plugin to check styling and other Accessibility standards

## Unit Testing performed

- Automated testing coverage
    - Functionality of home and User list page
    - Accessibility violations testing using jest-axe
- Manual testing coverage
    - Siteimprove Accessibility Checker
    - keyboard
    - VoiceOver

## Scope of Improvements

- Implementing ‘SKIP-TO-CONTENT’ on User List Page to help keyboard users and screen readers jump from the top of the
  page to the content without having to go through all the navigation links (best accessibility practice to follow)
- Import i18next library and store language in a text file

## Execution

### Using Docker ( Prerequisite: Docker )

- To build a docker image:
    - docker-compose up --build
- To start the container in detached mode:
    - docker-compose up -d
- To stop the container:
    - docker-compose down

### OR

### Commands to execute in the terminal to run app in local

### Client

- To go inside the client folder:
    - cd client
- To install dependencies:
    - npm install
- To spin up the app:
    - npm run dev
- To run test cases:
    - npm run test
- To run e2e cypress test:
    - npm run cypress

### Server

- To go inside the server folder:
    - cd server
- To install dependencies:
    - npm install
- To spin up the server:
    - npm run start

### App link -> http://localhost:3000/

### GraphQL Link -> http://localhost:5000/graphql

## App View
![Screenshot](https://github.com/DeepshikhaDudi20/NextJs-Apollo-UserDetails/blob/main/app%20screenshot.png)
