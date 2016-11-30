const os = require('os');
const path = require('path');

const starboundRoot = path.resolve(os.homedir(), 'Library', 'Application Support', 'Steam', 'steamapps', 'common', 'Starbound');
const modRoot = path.resolve(starboundRoot, 'mods');

// TODO check os before building path
const assetUnpacker = path.resolve(starboundRoot, 'osx', 'asset_unpacker');
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
