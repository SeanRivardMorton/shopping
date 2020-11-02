# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## App Requirements

- add and remove items to a basket

- automatically calculate
  - display cost
  - applicable discounts
  - total amount to pay

## Aknowledgements

- I think, if I were to do it again, I'd try and push each item to a basket array, and have a really simple 'receipt' component.

- Obviously there's more clean up to be done, but I don't want to

- First time using react-material, it's alright

- First time using immer, the provided hooks are cool.

- Could have broken up the testing a lot more. instead of writing happy path in the beginning. and achieving it near the end.

- When it comes to testing, I very much agree with Kent C Dodds's ethos (although I admit I could have done more)

  - [Write fewer, longer tests](https://kentcdodds.com/blog/write-fewer-longer-tests)
  - [Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details)

- Should have tested more scenarios.

- I think I could have achieved better composition

- I made the assumption that shopping data would have discount information attached. If that's not the case I'd just do a lookup.
