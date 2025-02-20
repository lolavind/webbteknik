# Webbteknik

This repo contains a web-site...

## Development

This repo depends on [Node](https://nodejs.org/) for local development.

### Running a local web server

To start a local web server, run `npm run dev` in a terminal window. The web server will run until it's stopped. The
start page will be available at http://localhost:8000/.

## Testing

There are tests for validation of all HTML and CSS files in this repo and well as running accessibility tests.

### Validating HTML

To validate all HTML files, run `npm run htmllint` in a terminal window.

### Validating CSS

To validate all CSS files, run `npm run stylelint` in a terminal window.

### Testing Accessability

This project is using [Pa11y](https://pa11y.org/) to tests for accessability issues. To test all pages, run 
`npm run pa11y` in a terminal window.

## Running all Tests

To run all tests in the project, run `npm run test` in a terminal window.

## VSCode Support

For your convenience, there is a VSCode extension suggestion that will install editor support for stylelint and
html-validator.
