const os = require('os');
const path = require('path');

const starboundRoot = path.resolve(os.homedir(), 'Library', 'Application Support', 'Steam', 'steamapps', 'common', 'Starbound');
const modRoot = path.resolve(starboundRoot, 'mods');

function getAssetToolsPath() {
  switch (os.platform()) {
    case 'darwin':  return 'osx';
    case 'win32':   return 'win32';
    default:        return 'linux';
  }
}

const assetUnpacker = path.resolve(starboundRoot, getAssetToolsPath(), 'asset_unpacker');
const assetRoot = path.resolve(starboundRoot, 'assets');
const assetSource = path.resolve(assetRoot, 'packed.pak');
const assetTarget = path.resolve('.assets');

module.exports = {
  starboundRoot,
  modRoot,
  assetUnpacker,
  assetTarget,
  assetSource,
  assetRoot
}
