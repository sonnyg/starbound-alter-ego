#!/usr/bin/env node

const fs = require('fs');
const os = require('os');

const starbound_root = `${os.homedir()}/Library/Application Support/Steam/steamapps/common/Starbound`;
const asset_packer = `${starbound_root}/osx/asset_packer`;
const mod_root = `${starbound_root}/mods`;

const mod_name = 'wig-out';
const pak_name = `${mod_name}.pak`;

const pak_staging = 'build';
const pak_source = `${pak_staging}/${mod_name}`;
const pak_target = `${pak_staging}/${pak_name}`;

const mod_target = `${mod_root}/${pak_name}`;

console.log(`Packing Starbound mod: ${mod_name} => ${pak_name}`);

const execFile = require('child_process').execFile;

const child = execFile(asset_packer, [pak_source, pak_target], (error, stdout, stderr) => {
  if (error) {
    // console.error(error);
    throw error;
  }

  console.log(stdout);
  console.log(`deploying mod: ${mod_target}`);

  // this may not seem like an efficient copy but it is OS indpendent
  fs.createReadStream(pak_target).pipe(fs.createWriteStream(mod_target));
});
