#!/usr/bin/env node

const fs = require('fs');
const os = require('os');

const starbound_root = `${os.homedir()}/Library/Application Support/Steam/steamapps/common/Starbound`;
const asset_unpacker = `${starbound_root}/osx/asset_unpacker`;
const asset_root = `${starbound_root}/assets`;

const asset_source = `${asset_root}/packed.pak`;
const asset_target = `${asset_root}/_unpacked`;

console.log(`Unpacking Starbound assets: ${asset_root}`);

const execFile = require('child_process').execFile;

const child = execFile(asset_unpacker, [asset_source, asset_target], (error, stdout, stderr) => {
  if (error) {
    // console.error(error);
    throw error;
  }

  console.log(stdout);
});

console.log(`Process: ${child.pid} spawned. Depending on your system, this may take some time...`);
