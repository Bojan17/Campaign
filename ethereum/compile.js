const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
//delete build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
//read Campaign.sol
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

//create build folder
fs.ensureDirSync(buildPath);
//write each contract in separate file
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
