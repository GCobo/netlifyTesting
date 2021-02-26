const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const shell = require('shelljs');

let directories = [];

const cypressDir = 'src/components/';

const cypressFolder = path.join(__dirname, '../', cypressDir);

fs.readdirSync(cypressFolder).forEach((file) => {
  if (!file.includes('.')) {
    directories.push(file);
  }
});

function selectTests(directory) {
  const files = [];
  fs.readdirSync(cypressFolder + directory).forEach((file) => {
    if (file.includes('.spec')) {
      files.push(file);
    }
  });

  return files;
}

const inquirerDirectory = () =>
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'directory',
        message: 'Select the test group you want to run',
        choices: directories
      }
    ])
    .then((answers) => {
      return answers;
    });

const inquirerTests = (files) =>
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'tests',
        message: 'Select the test you want to run',
        choices: files
      }
    ])
    .then((answers) => {
      return answers;
    });

const runCommand = (folder) => {
  const command = `yarn test --spec '${folder}'`;

  if (shell.exec(command).code !== 0) {
    shell.echo('Operation failed');
    shell.exit(1);
  }
};

(async function () {
  const { directory } = await inquirerDirectory();
  const files = selectTests(directory);
  const { tests } = await inquirerTests(files);
  const testFolder = `${cypressDir}${directory}/${tests}`;

  runCommand(testFolder);
})();
