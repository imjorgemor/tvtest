# RAKUTEN TV TEST

UPDATE NOTE: React fast refresh configuration improved with better performance and reduced bundle size. Improved ui in slider component with the touch position indicator and migration from bitmovin to shaka library with custom ui.

* [About The Project](#about)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Available scripts](#available-scripts)
* [Features](#features)
* [Project code decisions](#project-code-decisions)
* [Roadmap](#roadmap)
* [Contact](#contact)


## About The Project

The purpose of this project is develop a React application that simulates the [Rakuten TV Website](https://rakuten.tv/es);
![cover](https://github.com/imjorgemor/tvtest/blob/main/src/assets/images/appdemo.gif)


## Built With

This project has built with:
* Webpack v5
* React v18
* Redux Toolkit
* Bitmovin player
* React Router Dom v6.4
* Typescript

## Getting Started

Get a local copy up and run these following simple steps.
```sh
git clone https://github.com/imjorgemor/tvtest.git
```

Install NPM packages
```sh
npm install
```

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open [http://localhost.rakuten.tv:3000](http://localhost.rakuten.tv:3000/) to view it in your browser.

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Run tv application in a local server
`npx servor build`

## Features And Test Requirements

### Homepage that should render some lists of movies

When entering in the tv test app it renders a list of movies divided by type of movie or section.

### Scrollable slider

The movies displayed by section are scrollable horizontally by clicking on some buttons (on both sides).

### Detail movie page

Each movie has a detail page with the title, rating, year of release, duration and plot. Users can visit this detail page by clicking on the artwork of each movie. In the detail page a button is displayed and by clicking it, users can reproduce a trailer.

### Video player reproduction

The movie trailer shows the film title, when loading the film's artwork and a go back button to leave the reproduction player.

### Global state management with redux

The app has a global state to handle errors on loading categories and movie player state with the details of the movie and the movie player bitmovin library.

### Performance

Renders and fetching the list data is made only when the user is screening the information required (i.e. lazy loading implementation).

### In real life errors should be handled

Route errors, player reproduction errors and errors on requesting data to the api have been handled and the user is informed every time a error could affect the user experience.

## Project Code Decisions

### React Fast Refresh

Developer experience is a great value to consider. To this regard I have implemented the [webpack fast refresh plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin), even is in experimental, Dan Abramov (from the react team) has recommended via [twitter](https://twitter.com/dan_abramov/status/1290967745304068096?lang=en) and the hot reloading is really fast.

### Repository Pattern

As the api responses in case of success or error do not return the same Data Transfer Object I have implemented a repository pattern to decouple the data fetching from the component, adding a layer of data transformation or adaptation to a unified model of data (i.e Meta model) and a simple repository factory to avoid code duplication when calling the repository.

![repository](https://github.com/imjorgemor/tvtest/blob/main/src/assets/images/repositoryPatternDiagram.png)

In this sense layering the data fetching with a simple repository pattern also improves the developing experience as the developer only have to call the service required from the component.

### Atomic design

Atomic design allows to the developer write more reusable and readable code, specially when not using a UI library, provides an easy pattern of code splitting based on SOLID principles and thus, the unit testing component is more efficient.

### Use custom hooks as a view controller

Custom hooks are a great tool to split the component logic may have in a separate file and attach or hook it to the view or renderign component (is the evolution of the former smart-dumb component pattern).

### Redux

Redux has been implemented to handle only global app states or user information that could be interested to sync with the server. Data fetching that is not modulable by the user (like list films or data info film has been handled outside the redux scope - like the rakuten website does).

### Bitmovin library

For the purpose of this test I have used bitmovin library as it is really fast to implement. However the bitmovin UI gives a lot of errors in unit testing so I have had to remove it and add some patchs like auto-reproduction without sound.

## Roadmap

- [x] Reduze or minimize bundle size for better performance
- [x] Add the slider dots to inform the user the total of scrolls and the current position.
- [x] Migrate Bitmovin library to Shaka library(the one used by rakuten) using a personalized UI.
- [ ] Add integration tests to redux
- [ ] Add end2end test with playwright
- [ ] Add preview card in the home page when mouse-over each film
- [ ] Make the horizontal slide scroll infinite like the rakuten website.

## Contact

Email me at: jorge-mor@outlook.es 

Or visit my [Linkedin](https://www.linkedin.com/in/jorge-mor-reactdev/).