#!/usr/bin/env node

const fs = require('fs');
const config = require('./config.js')

const assetPacker = config.assetPacker;
const stagingTarget = config.stagingTarget;
const modSource = config.modSource;
const modTarget = config.modTarget;

console.log(`Packing mod: ${config.modPack}`);

const execFile = require('child_process').execFile;

const child = execFile(assetPacker, [modSource, stagingTarget], (error, stdout, stderr) => {
  if (error) {
    console.error(stderr);
    console.error(error);
    throw error;
  }

  console.log(stdout);
  console.log(`deploying mod: ${modTarget}`);

  // this may not seem like an efficient copy but it is OS independent
  fs.createReadStream(stagingTarget).pipe(fs.createWriteStream(modTarget));
});
