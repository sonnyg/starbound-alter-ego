#!/usr/bin/env node

const fs = require('fs');
const config = require('./config.js')

const mod_name = 'alter-ego';
const pak_name = `${mod_name}.pak`;

const pak_staging = 'build';
const pak_source = `${pak_staging}/${mod_name}`;
const pak_target = `${pak_staging}/${pak_name}`;

const mod_target = `${config.modRoot}/${pak_name}`;
const asset_packer = `${config.starboundRoot}/osx/asset_packer`;

console.log(`Packing mod: ${mod_name} => ${pak_name}`);

const execFile = require('child_process').execFile;

const child = execFile(asset_packer, [pak_source, pak_target], (error, stdout, stderr) => {
  if (error) {
    // console.error(error);
    throw error;
  }

  console.log(stdout);
  console.log(`deploying mod: ${mod_target}`);

  // this may not seem like an efficient copy but it is OS independent
  fs.createReadStream(pak_target).pipe(fs.createWriteStream(mod_target));
});
