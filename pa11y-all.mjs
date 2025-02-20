import pa11y from 'pa11y';
import reporter from 'pa11y/lib/reporters/cli.js';
import * as path from 'node:path';
import { glob } from 'node:fs/promises';

var errors = 0;
async function runPa11y(file) {
  try {
    const results = await pa11y(file);
    errors += results.issues.length;
    const text = await reporter.results(results);
    console.log(text);
  } catch (error) {
    console.log("Error running pa11y", error);
  }
}

async function runAll() {
  const all = [];
  for await (const file of glob('webbteknik/**/*.html')) {
    all.push(runPa11y(file));
  }
  return Promise.all(all);
}

await runAll();

if (errors > 0) {
  console.log("Total number of errors: ", errors);
  process.exit(2);
}
