const os = require('os');

const starboundRoot = `${os.homedir()}/Library/Application Support/Steam/steamapps/common/Starbound`;
const assetRoot = `${starboundRoot}/assets`;
const modRoot = `${starboundRoot}/mods`;

module.exports = {
  starboundRoot,
  assetRoot,
  modRoot
}
