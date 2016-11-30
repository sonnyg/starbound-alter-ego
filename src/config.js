const os = require('os');
const path = require('path');

const starboundRoot = path.resolve(os.homedir(), 'Library', 'Application Support', 'Steam', 'steamapps', 'common', 'Starbound');

function getAssetToolsPath() {
  switch (os.platform()) {
    case 'darwin':  return 'osx';
    case 'win32':   return 'win32';
    default:        return 'linux';
  }
}

const assetUnpacker = path.resolve(starboundRoot, getAssetToolsPath(), 'asset_unpacker');
const assetPacker = path.resolve(starboundRoot, getAssetToolsPath(), 'asset_packer');

const assetRoot = path.resolve(starboundRoot, 'assets');
const assetSource = path.resolve(assetRoot, 'packed.pak');
const assetTarget = path.resolve('assets');

// this requires running script through npm to get the env
const modName = process.env.npm_package_name;
const modPack = `${modName}.pak`;
const stagingRoot = path.resolve('build');
const stagingTarget = path.resolve(stagingRoot, modPack);

const modRoot = path.resolve(starboundRoot, 'mods');
const modSource = path.resolve(stagingRoot, modName);
const modTarget =  path.resolve(modRoot, modPack);

module.exports = {
  starboundRoot,
  assetUnpacker,
  assetPacker,
  assetRoot,
  assetSource,
  assetTarget,
  modName,
  modPack,
  stagingRoot,
  stagingTarget,
  modRoot,
  modSource,
  modTarget
}
