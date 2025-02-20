# Webbteknik

This repo contains a web-site...

## Development

This repo depends on [Node](https://nodejs.org/) for local development.

### Running a local web server

To start a local web server, run `npm run dev` in a terminal window. The web server will run until it's stopped. The
start page will be available as http://localhost:8000/.

## Testing

There are tests for validation of all HTML and CSS files in this repo and well as running accessibility tests.

### Validating HTML and CSS

To run all tests, run `npm run test` in a terminal window. This command will validate all HTML and CSS files in the
`webbteknik` directory. If needed, each test can be run separate using `npm run htmllint` or `npm run stytlelint`.

### Testing Accessability

This project is using [Pa11y](https://pa11y.org/) to tests for accessability issues. To test all pages run 
`npm run pa11y`. This will test all HTML-pages in the webbteknik directory.
