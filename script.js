const fs = require('fs');

const inputFile = 'input.js';
const outputFile = 'output3.js';

const content = fs.readFileSync(inputFile, 'utf8');

const dataMatch = content.match(/const data = (\[[\s\S]*?\]);/);
if (!dataMatch) throw new Error('Invalid input format');

const data = JSON.parse(dataMatch[1]);

data.forEach((item, i) => {
  item.id = i + 1;
});

const output = 'const data = ' + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync(outputFile, output, 'utf8');
