#!/usr/bin/env node

const fs = require('fs');
const config = require('./config.js');

const assetUnpacker = `${config.assetUnpacker}`;
const assetSource = `${config.assetSource}`;
const assetTarget = `${config.assetTarget}`;

console.log(`Asset source:  ${assetSource}`);
console.log(`Assets target: ${assetTarget}`);

const execFile = require('child_process').execFile;

const child = execFile(assetUnpacker, [assetSource, assetTarget], (error, stdout, stderr) => {
  if (error) {
    console.error(stderr);
    console.error(error);
    throw error;
  }

  console.log(stdout);
});

console.log(`Process: ${child.pid} spawned. Depending on your system, this may take some time...`);
