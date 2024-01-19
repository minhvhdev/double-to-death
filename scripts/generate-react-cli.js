/**
 * This script to create component and page quickly. For Example:
 * yarn gen Button com a  => Button Component at common/components/atoms
 * yarn gen Card bj a    => Card component at games/black-jack/components/atoms
 * yarn gen Login         => login page at pages/
 * yarn gen SinglePlay bj       => home page at pages/games/black-jack
 */

const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pathComponentMap = {
  com: 'common',
  bj: 'games/black-jack',
};
const levelMap = {
  a: 'atoms',
  m: 'molecules',
  o: 'organisms',
  p: 'pages',
};
const name = process.argv[2];
const pathName = process.argv[3];
const componentLevel = process.argv[4];

const generatedPath = `src/${pathComponentMap[pathName]}/components/${levelMap[componentLevel]}`;

const filePathToOpen = `${generatedPath}/${name}/${name}.tsx`;

//Generate Component
execSync(
  `npx generate-react-cli c ${name} --path ${generatedPath} ${
    componentLevel === 'p' ? '--type=page' : ''
  }`,
  {
    stdio: 'inherit',
  },
);

// Auto Import
const dir = `./${generatedPath}`;

fs.appendFileSync(
  path.join(dir, 'index.ts'),
  `export { default as ${name} } from './${name}/${name}';\n`,
);
console.info(`Auto import success at ${generatedPath}/index.ts`);

// Open file
exec(`code ${filePathToOpen}`, (err) => {
  if (err) {
    return console.log(err);
  }
});
