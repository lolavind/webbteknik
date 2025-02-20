import pa11y from 'pa11y';
import reporter from 'pa11y/lib/reporters/cli.js';
import * as path from 'node:path';
import { glob } from 'node:fs/promises';

async function runPa11y(file) {
  try {
    console.log('Testing file', file);
    const results = await pa11y(file);
    const text = await reporter.results(results);
    console.log(text);
  } catch (error) {
    console.log("Error running pa11y", error);
  }
}

for await (const file of glob('webbteknik/**/*.html')) {
  runPa11y(file);
}
