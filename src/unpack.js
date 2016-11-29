#!/usr/bin/env node

function unpackAssets() {
  const fs = require('fs');
  const config = require('./config.js')

  const asset_unpacker = `${config.starboundRoot}/osx/asset_unpacker`;
  const asset_source = `${config.assetRoot}/packed.pak`;
  const asset_target = `${config.assetRoot}/_unpacked`;

  console.log(`Using asset location: ${config.assetRoot}`);
  console.log(`Unpacking assets to: ${asset_target}`);

  // skip unpacking if directory is present
  if (!fs.existsSync(asset_target)) {
    const execFile = require('child_process').execFile;

    const child = execFile(asset_unpacker, [asset_source, asset_target], (error, stdout, stderr) => {
      if (error) {
        // console.error(error);
        throw error;
      }

      console.log(stdout);
    });

    console.log(`Process: ${child.pid} spawned. Depending on your system, this may take some time...`);
  } else {
    console.log(`Assets already unpacked. Skipping unpack.`);
  }
}

unpackAssets();

module.exports = {
  unpackAssets
}
