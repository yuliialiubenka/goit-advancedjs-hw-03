# Image Search

An image search application powered by the Pixabay API. Search results are
displayed in a responsive gallery with large-image previews provided by
SimpleLightbox.

## Getting Started

An LTS version of [Node.js](https://nodejs.org/) is required.

```bash
npm install
npm run dev
```

The Pixabay API key is defined in `src/js/pixabay-api.js` according to the
assignment requirements.

## Available Commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server.      |
| `npm run build`   | Create a production build in `dist`. |
| `npm run preview` | Preview the production build.       |

## Project Structure

```text
src/
|-- index.html
|-- main.js
|-- js/
|   |-- pixabay-api.js
|   `-- render-functions.js
`-- css/
    |-- styles.css
    |-- reset.css
    |-- base.css
    `-- home.css
```

`styles.css` is the CSS aggregator. Global variables and reusable styles are
stored in `base.css`, while page-specific styles are defined in `home.css`.

## GitHub Pages

The project is deployed to GitHub Pages through the workflow in
`.github/workflows/deploy.yml`. To publish the project, select the `gh-pages`
branch as the GitHub Pages source in the repository settings.
