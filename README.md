![alt text](https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png)

# moxie-pokedex
A little test app for viewing our favorite Pokemon!

-------

## Description of the Changes

### Pokémon Detail Page
- Fetched detailed data of a specific Pokémon using the PokéAPI.
- Displayed high-resolution images, name, type, height, weight, base experience, and abilities.
- Used `react-chartjs-2` to visualize base stats.
- Added navigation in the header title to return to the Pokémon list page.

### Pokémon List Page
- Fetched and displayed a list of Pokémon from the PokéAPI, limiting the display to 12 Pokémon at a time.
- Each Pokémon card links to its detail page for further information.

## Methodology and Coding Choices

### React Query
- Used for fetching and caching Pokémon data to optimize performance and ensure a smooth user experience.

### React Router
- Utilized for handling navigation between the Pokémon list and detail pages.
- Made use of dynamic routing with `useParams` to fetch specific Pokémon details.

### Component Structure
- Created reusable components for better maintainability and modularity.
- Organized components under a structured folder hierarchy to enhance code readability and maintainability.

### Tailwind CSS
- Applied Tailwind CSS for styling to create a modern, responsive, and consistent UI.
- Configured Tailwind through CRACO for easier alias setup and management.

### Testing
- Ensured 100% test coverage for all pages and components using Jest and React Testing Library.
- Created test cases for API interactions, component rendering, and user interactions.
<img width="1033" alt="Screenshot 2024-05-23 at 00 36 49" src="https://github.com/mostafa-raafat/moxie-pokedex/assets/43439787/f40a7a6e-f5a5-4ef9-bd10-ceb5d10683b0">


### Responsive Design
- Designed the application to be fully responsive, ensuring compatibility across various devices and screen sizes.

### Error Handling
- Implemented basic error handling for API requests using try-catch blocks and conditional rendering.

## Additional Features
- Integrated `react-chartjs-2` to display Pokémon base stats visually.
- Configured aliases using CRACO to simplify import paths and improve code readability.

## Project Structure
```
moxie-pokedex/
├── src/
│ ├── api/
│ |   └── pokemonApi*/
| |
│ ├── pages/
│ |   └── home*/
│ |   └── pokemon*/
| |
│ ├── components*/
| |   └── common*/
| |       └── Header*/
| |       └── LoadingSpinner*/
│ │   └── BaseStats/*
│ │   └── InformationPokemon/*
│ │   └── NotFound/*
│ │   └── PokemonCard/*
│ │   └── TypeLabel/*
| |
│ ├── mocks/
│ |   └── index.js
| |
│ ├── utils/
│ |   └── const.js
│ |
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js*
├── craco.config.js*
└── ...
```

## Deployment
You can access the deployed Pokémon app [Demo](https://moxie-pokedex-eight.vercel.app/).

----------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
