#!/usr/bin/env node

import * as fs from 'fs';

let input;
let output;
const WATCH_INTERVAL = 2000;
const ENCODING = 'utf8';

try {
  input = process.argv[3] || './static/tw.css';
  output = process.argv[5] || './static/twlit.js';
} catch (e) {
  console.log(`Error reading input/output parameters ${e}`);
}

function updateFile() {
  try {
    let contents;

    try {
      contents = fs.readFileSync(input, ENCODING);
    } catch (e) {
      console.log(
        `Failed to read file ${input}. Please make sure the file exists and is accessible.`
      );
    }

    let cleanContents = contents.replaceAll('`', '');
    cleanContents = cleanContents.replaceAll('\\', '\\\\');

    console.log('Has peer/{name} class? ', contents.includes('peer\\'));
    console.log('Has phonenumber class? ', contents.includes('phonenumber'));

    const litContents = `import { css } from "lit";
export const TWStyles = css\` ${cleanContents} \`
        `;

    fs.writeFileSync(output, litContents);
    console.log(`File ${output} updated with new TailwindCSS styles.`);
  } catch (err) {
    console.log(err);
  }
}

fs.readFile(input, () => {
  console.log(`Reading from file: ${input}`);
  console.log(`Writing to file: ${output}`);
  updateFile();
});

fs.watchFile(input, { interval: WATCH_INTERVAL }, () => {
  console.log(`Watching file ${input} for changes...`);
  updateFile();
});
